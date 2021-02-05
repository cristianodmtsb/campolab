import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ProducerPage,
  AddProducerPage,
  AddFarmPage,
  ProducerDetailsPage,
} from "../pages";

const RouterContainer = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProducerPage />} title="Homepage" />
      <Route
        exact
        path="/produtor/:id"
        element={<ProducerDetailsPage />}
        title="Detalhes Produtor"
      />
      <Route
        exact
        path="/produtor/adicionar"
        element={<AddProducerPage />}
        title="Adicionar Produtor"
      />
      <Route
        exact
        path="/produtor/:id/fazenda"
        element={<AddFarmPage />}
        title="Adicionar Fazenda"
      />
      {/* <Route path="*" title="Not Found" /> */}
    </Routes>
  );
};

export default RouterContainer;
