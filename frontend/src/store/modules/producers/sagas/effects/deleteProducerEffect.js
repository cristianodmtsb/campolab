import { put, call } from "redux-saga/effects";

import { request } from "../../../../../utils/http";
import { deleteProducerQuery } from "../../repository";

import actions from "../../actions";

export function* deleteProducersEffect({ payload }) {
  try {
    yield call(request, deleteProducerQuery, { producerId: payload });

    yield put(actions.deleteProducerSuccess());
  } catch (error) {
    yield put(actions.deleteProducerFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("delete producers error:", error);
  }
}

export default deleteProducersEffect;
