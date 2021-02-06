import { put, call } from "redux-saga/effects";

import { request } from "../../../../../utils/http";
import { loadProducersQuery } from "../../repository";

import actions from "../../actions";

export function* loadProducersEffect() {
  try {
    const { data } = yield call(request, loadProducersQuery);
    yield put(actions.loadProducersSuccess(data));
  } catch (error) {
    yield put(actions.loadProducersFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("producers error:", error);
  }
}

export default loadProducersEffect;
