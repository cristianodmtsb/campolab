import { all } from "redux-saga/effects";

import suportTicket from "./modules/suportTicket/sagas";

export default function* rootSaga() {
  yield all([suportTicket()]);
}
