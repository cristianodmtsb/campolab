import React from "react";
import { Typography, Divider } from "@material-ui/core";
import HomeLayout from "../../components/layouts";
import { TableListProducers } from "../../components/producer";
import { ProducersContainer } from "../../containers";

const ProducerPage = () => {
  return (
    <HomeLayout>
      <Typography variant="h2">Produtores</Typography>
      <Divider />
      <ProducersContainer>
        <TableListProducers />
      </ProducersContainer>
    </HomeLayout>
  );
};

export default ProducerPage;
