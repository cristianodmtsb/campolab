import { Maybe } from "../../../../utils/functors";

export default (state) =>
  Maybe.of(state)
    .map((state) => state.producers)
    .map((producers) => producers.error)
    .get({ msg: "", hasError: false });
