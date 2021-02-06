import React from "react";
import { useParams, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import FormDetailsProducer from "./details-form";
import TableListFarms from "./table-list-farms";

const DetailsProducer = (props) => {
  const {
    producer,
    isLoadingProducerDetails,
    updateProducerSuccess,
    handleUpdateProducer,
  } = props;
  const { id } = useParams();

  return (
    <>
      <FormDetailsProducer
        producer={producer}
        handleUpdate={handleUpdateProducer}
      />
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/produtor/${id}/fazenda`}
      >
        Adicionar Propriedade
      </Button>
      <TableListFarms farms={producer.farms} />
    </>
  );
};

export default DetailsProducer;
