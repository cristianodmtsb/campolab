import React from "react";
import { useParams, Link } from "react-router-dom";
import { Maybe } from "../../../utils/functors";
import Button from "@material-ui/core/Button";

import FormDetailsProducer from "./details-form";
import TableListFarms from "./table-list-farms";

const DetailsProducer = (props) => {
  const { producer, isLoadingProducerDetails } = props;
  const { farms } = Maybe.of(producer).get({});
  console.log("farms", farms);
  const { id } = useParams();

  return (
    <>
      <FormDetailsProducer producer={producer} />
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/produtor/${id}/fazenda`}
      >
        Adicionar Propriedade
      </Button>
      <TableListFarms farms={farms} />
    </>
  );
};

export default DetailsProducer;
