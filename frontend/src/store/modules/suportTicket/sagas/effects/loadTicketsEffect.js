import { put, call } from "redux-saga/effects";

import { requestTo } from "../../../../../utils/http";
import { loadTicketsQuery } from "../../repository";

import actions from "../../actions";

export function* loadTicketsEffect() {
  try {
    const { status, data } = yield call(requestTo, loadTicketsQuery, {});

    if (status === 0) {
      yield put(actions.loadTicketsSuccess({ tickets: data }));
    } else {
      yield put(actions.loadTicketsFailure({}));
    }
  } catch (error) {
    yield put(actions.loadTicketsFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("login error:", error);
  }
}

export default loadTicketsEffect;
