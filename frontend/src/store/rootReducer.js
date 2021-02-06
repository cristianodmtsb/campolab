import { combineReducers } from "redux";

import producers from "./modules/producers/reducers";
import farms from "./modules/farms/reducers";

const appReducer = combineReducers({
  producers,
  farms,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
