import { put, call, select } from "redux-saga/effects";

import { requestTo } from "../../../../../utils/http";
import { updateProducerQuery } from "../../repository";

import actions from "../../actions";

export function* updateProducerEffect({ payload }) {
  try {
    const response = yield call(requestTo, updateProducerQuery, {
      payload,
    });

    console.log("update", response);

    yield put(actions.updateProducerSuccess());
    yield put(actions.loadProducersRequest());
  } catch (error) {
    yield put(actions.updateProducerFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("update error:", error);
  }
}
export default updateProducerEffect;
