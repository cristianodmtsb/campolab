import React from "react";
import { Provider } from "react-redux";
import RouterContainer from "./view/routes";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
