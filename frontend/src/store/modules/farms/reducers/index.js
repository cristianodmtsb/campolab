import Switch from "../../../../utils/functors/Switch";

import INITIAL_STATE from "../state";
import Types from "../actions/actionTypes";

import * as createFarm from "./operations/createFarm";

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  return Switch.on(type, state, payload, INITIAL_STATE)
    .case(Types.CREATE_FARM_REQUEST, createFarm.request)
    .case(Types.CREATE_FARM_SUCCESS, createFarm.success)
    .case(Types.CREATE_FARM_FAILURE, createFarm.failure)

    .default(state);
};

export default reducer;
