import { put, call, select } from "redux-saga/effects";

import { requestTo } from "../../../../../utils/http";
import { createTicketQuery } from "../../repository";

import actions from "../../actions";

export function* createTicketCallEffect({ payload }) {
  try {
    const { status } = yield call(requestTo, createTicketQuery, {
      data: payload,
    });

    if (status === 0) {
      yield put(actions.createTicketCallSuccess());
    } else {
      yield put(actions.createTicketCallFailure({}));
    }
  } catch (error) {
    yield put(actions.createTicketCallFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("login error:", error);
  }
}

export default createTicketCallEffect;
