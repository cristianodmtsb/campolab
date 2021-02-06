import { all } from "redux-saga/effects";

import producer from "./modules/producers/sagas";
import farms from "./modules/farms/sagas";

export default function* rootSaga() {
  yield all([producer(), farms()]);
}
