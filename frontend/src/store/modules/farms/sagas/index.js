import { takeEvery, all } from "redux-saga/effects";

import Types from "../actions/actionTypes";

import createFarmEffect from "./effects/createFarmEffect";

export function* watchCreateFarmEffect() {
  yield takeEvery(Types.CREATE_FARM_REQUEST, createFarmEffect);
}

function* rootSaga() {
  yield all([watchCreateFarmEffect()]);
}

export default rootSaga;
