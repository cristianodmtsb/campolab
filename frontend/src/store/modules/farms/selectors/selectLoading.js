import { Maybe } from "../../../../utils/functors";

export default (state) =>
  Maybe.of(state)
    .map((state) => state.farms)
    .map((farms) => ({
      isCreatingFarm: farms.isCreatingFarm,
      createFarmsuccess: farms.createFarmsuccess,
    }))
    .get({
      isCreatingFarm: false,
      createFarmsuccess: false,
    });
