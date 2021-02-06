import React from "react";
import HomeLayout from "../../components/layouts";
import { AddProducerForm } from "../../components/add-producer";
import { AddProducerContainer } from "../../containers";

const AddProducerPage = () => {
  return (
    <HomeLayout>
      <AddProducerContainer>
        <AddProducerForm />
      </AddProducerContainer>
    </HomeLayout>
  );
};

export default AddProducerPage;
