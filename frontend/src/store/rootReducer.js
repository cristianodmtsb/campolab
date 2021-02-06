import { combineReducers } from "redux";

import suportTicket from "./modules/suportTicket/reducers";

const appReducer = combineReducers({
  suportTicket,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
