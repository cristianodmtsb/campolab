import { put, call } from "redux-saga/effects";

import { request } from "../../../../../utils/http";
import { updateProducerQuery } from "../../repository";

import actions from "../../actions";

export function* updateProducerEffect({ payload }) {
  try {
    const { status } = yield call(request, updateProducerQuery, {
      payload,
    });

    if (status === 200) {
      yield put(actions.updateProducerSuccess());
    } else {
      yield put(actions.updateProducerFailure());
    }
  } catch (error) {
    yield put(actions.updateProducerFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("update error:", error);
  }
}
export default updateProducerEffect;
