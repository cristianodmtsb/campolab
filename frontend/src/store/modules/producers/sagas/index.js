import { takeEvery, all } from "redux-saga/effects";

import Types from "../actions/actionTypes";

import loadProducersEffect from "./effects/loadProducersEffect";
import loadProducerDetailsEffect from "./effects/loadProducerDetailsEffect";
import createProducerEffect from "./effects/createProducerEffect";
import updateProducerEffect from "./effects/updateProducerEffect";
import deleteProducerEffect from "./effects/deleteProducerEffect";

export function* watchLoadProducers() {
  yield takeEvery(Types.LOAD_PRODUCERS_REQUEST, loadProducersEffect);
}

export function* watchLoadProducerDetails() {
  yield takeEvery(
    Types.LOAD_PRODUCER_DETAILS_REQUEST,
    loadProducerDetailsEffect
  );
}

export function* watchCreateProducerEffect() {
  yield takeEvery(Types.CREATE_PRODUCER_REQUEST, createProducerEffect);
}

export function* watchUpdateProducerEffect() {
  yield takeEvery(Types.CREATE_PRODUCER_REQUEST, updateProducerEffect);
}

export function* watchDeleteProducerEffect() {
  yield takeEvery(Types.DELETE_PRODUCER_REQUEST, deleteProducerEffect);
}

function* rootSaga() {
  yield all([
    watchLoadProducers(),
    watchLoadProducerDetails(),
    watchCreateProducerEffect(),
    watchUpdateProducerEffect(),
    watchDeleteProducerEffect(),
  ]);
}

export default rootSaga;
