import { combineReducers } from "redux";

import producers from "./modules/producers/reducers";

const appReducer = combineReducers({
  producers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
