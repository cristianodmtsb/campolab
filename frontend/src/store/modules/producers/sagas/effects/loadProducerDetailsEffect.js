import { put, call } from "redux-saga/effects";

import { request } from "../../../../../utils/http";
import { loadProducerDetailsQuery } from "../../repository";

import actions from "../../actions";

export function* loadProducerDetailsEffect({ payload }) {
  try {
    const { data } = yield call(request, loadProducerDetailsQuery, {
      producerId: payload,
    });

    yield put(actions.loadProducerDetailsSuccess(data));
  } catch (error) {
    yield put(actions.loadProducerDetailsFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("producers error:", error);
  }
}

export default loadProducerDetailsEffect;
