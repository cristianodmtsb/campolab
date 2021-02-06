import { put, call, select } from "redux-saga/effects";

import { requestTo } from "../../../../../utils/http";
import { loadTicketsCategoriesQuery } from "../../repository";

import actions from "../../actions";

export function* loadTicketCategoriesEffect() {
  try {
    const { status, data } = yield call(
      requestTo,
      loadTicketsCategoriesQuery,
      {}
    );

    if (status === 0) {
      yield put(actions.loadTicketsCategoriesSuccess(data));
    } else {
      yield put(actions.loadTicketsCategoriesFailure({}));
    }
  } catch (error) {
    yield put(actions.loadTicketsCategoriesFailure({ status: error.status }));
    // eslint-disable-next-line no-console
    console.log("login error:", error);
  }
}

export default loadTicketCategoriesEffect;
