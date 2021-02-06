import React from "react";
import HomeLayout from "../../components/layouts";
import DetailsProducer from "../../components/producer-details";
import { ProducerDetailsContainer } from "../../containers";

const ProducerDetailsPage = () => {
  return (
    <HomeLayout>
      <ProducerDetailsContainer>
        <DetailsProducer />
      </ProducerDetailsContainer>
    </HomeLayout>
  );
};

export default ProducerDetailsPage;
