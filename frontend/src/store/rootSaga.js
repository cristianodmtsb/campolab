import { all } from "redux-saga/effects";

import producer from "./modules/producers/sagas";

export default function* rootSaga() {
  yield all([producer()]);
}
