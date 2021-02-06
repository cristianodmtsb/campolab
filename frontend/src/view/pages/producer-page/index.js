import React from "react";
import { Typography } from "@material-ui/core";
import HomeLayout from "../../components/layouts";
import { TableListProducers } from "../../components/producer";

const ProducerPage = () => {
  return (
    <HomeLayout>
      <Typography variant="h2">Produtores</Typography>
      <TableListProducers />
    </HomeLayout>
  );
};

export default ProducerPage;
