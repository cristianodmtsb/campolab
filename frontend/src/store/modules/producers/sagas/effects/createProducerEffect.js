import { put, call } from "redux-saga/effects";

import { request } from "../../../../../utils/http";
import { createProducerQuery } from "../../repository";

import actions from "../../actions";

export function* createProducerEffect({ payload }) {
  try {
    const { status } = yield call(request, createProducerQuery, {
      payload,
    });

    if (status === 200) {
      yield put(actions.createProducerSuccess());
    } else {
      yield put(actions.createProducerFailure());
    }
  } catch (error) {
    yield put(actions.createProducerFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("create error:", error);
  }
}

export default createProducerEffect;
