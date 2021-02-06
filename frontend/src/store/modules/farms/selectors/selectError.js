import { Maybe } from "../../../../utils/functors";

export default (state) =>
  Maybe.of(state)
    .map((state) => state.farms)
    .map((farms) => farms.error)
    .get({ msg: "", hasError: false });
