import { put, call } from "redux-saga/effects";

import { request } from "../../../../../utils/http";
import { createFarmQuery } from "../../repository";

import actions from "../../actions";

export function* createFarmEffect({ payload }) {
  try {
    const { status } = yield call(request, createFarmQuery, {
      payload,
    });

    if (status === 200) {
      yield put(actions.createFarmSuccess());
    } else {
      yield put(actions.createFarmFailure());
    }
  } catch (error) {
    yield put(actions.createFarmFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("create error:", error);
  }
}

export default createFarmEffect;
