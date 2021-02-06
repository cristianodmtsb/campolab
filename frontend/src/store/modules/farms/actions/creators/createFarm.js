import Types from "../actionTypes";

const createFarmRequest = (payload) => ({
  type: Types.CREATE_FARM_REQUEST,
  payload,
});

const createFarmSuccess = (payload) => ({
  type: Types.CREATE_FARM_SUCCESS,
  payload,
});

const createFarmFailure = (payload) => ({
  type: Types.CREATE_FARM_FAILURE,
  payload,
});

export default {
  createFarmRequest,
  createFarmSuccess,
  createFarmFailure,
};
