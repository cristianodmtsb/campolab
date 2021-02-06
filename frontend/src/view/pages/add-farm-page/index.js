import React from "react";
import HomeLayout from "../../components/layouts";
import { AddFarmForm } from "../../components/add-farm";
import { AddFarmContainer } from "../../containers";

const AddFarmPage = () => {
  return (
    <HomeLayout>
      <AddFarmContainer>
        <AddFarmForm />
      </AddFarmContainer>
    </HomeLayout>
  );
};

export default AddFarmPage;
