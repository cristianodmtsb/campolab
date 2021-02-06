import { put, call } from "redux-saga/effects";

import { requestTo } from "../../../../../utils/http";
import { createProducerQuery } from "../../repository";

import actions from "../../actions";

export function* createProducerEffect({ payload }) {
  try {
    const { data } = yield call(requestTo, createProducerQuery, {
      data: payload,
    });

    yield put(actions.createProducerSuccess(data));
  } catch (error) {
    yield put(actions.createProducerFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("create error:", error);
  }
}

export default createProducerEffect;
