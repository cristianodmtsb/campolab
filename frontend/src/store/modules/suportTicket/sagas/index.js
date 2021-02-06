import { takeEvery, all } from "redux-saga/effects";

import Types from "../actions/actionTypes";

import loadTicketsEffect from "./effects/loadTicketsEffect";
import createTicketCallEffect from "./effects/createTicketCallEffect";
import loadTicketCategoriesEffect from "./effects/loadTicketCategoriesEffect";

export function* watchLoadTickets() {
  yield takeEvery(Types.LOAD_TICKET_CALLS_REQUEST, loadTicketsEffect);
}

export function* watchCreateTicketCallEffect() {
  yield takeEvery(Types.CREATE_TICKET_CALL_REQUEST, createTicketCallEffect);
}

export function* watchLoadTicketCategoriesEffect() {
  yield takeEvery(
    Types.LOAD_TICKET_CATEGORIES_REQUEST,
    loadTicketCategoriesEffect
  );
}

function* rootSaga() {
  yield all([
    watchLoadTickets(),
    watchCreateTicketCallEffect(),
    watchLoadTicketCategoriesEffect(),
  ]);
}

export default rootSaga;
