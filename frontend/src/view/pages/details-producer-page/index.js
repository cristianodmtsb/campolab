import React from "react";
import HomeLayout from "../../components/layouts";
import DetailsProducer from "../../components/producer-details";
import ProducerDetailsContainer from "../../containers/ProducerDetailsContainer";

const ProducerDetailsPage = () => {
  return (
    <HomeLayout>
      <ProducerDetailsContainer>
        <DetailsProducer producer={{}} />
      </ProducerDetailsContainer>
    </HomeLayout>
  );
};

export default ProducerDetailsPage;
