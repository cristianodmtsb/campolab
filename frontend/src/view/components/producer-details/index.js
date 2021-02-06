import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography, Divider, Grid } from "@material-ui/core";

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
      <Typography variant="h2">Produtor: {producer.name}</Typography>
      <Divider />
      <FormDetailsProducer
        producer={producer}
        handleUpdate={handleUpdateProducer}
      />

      <Grid
        container
        alignItems="flex-end"
        md={12}
        style={{ padding: 20, marginTop: 15, marginBottom: 15 }}
      >
        <Divider />
        <Grid md={6}>
          <Typography variant="h6">Adicione uma propriedade:</Typography>
        </Grid>
        <Grid md={6} align="right">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/produtor/${id}/fazenda`}
          >
            Adicionar Propriedade
          </Button>
        </Grid>

        <Divider />
      </Grid>

      <TableListFarms farms={producer.farms} />
    </>
  );
};

export default DetailsProducer;
