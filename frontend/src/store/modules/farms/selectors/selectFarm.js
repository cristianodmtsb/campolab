import { Maybe } from "../../../../utils/functors";

export default (state) =>
  Maybe.of(state)
    .map((state) => state.farms)
    .map((farms) => farms.farms)
    .get([]);
