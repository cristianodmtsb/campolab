import Types from "../actionTypes";

const loadProducersRequest = () => ({
  type: Types.LOAD_PRODUCERS_REQUEST,
});

const loadProducersSuccess = (payload) => ({
  type: Types.LOAD_PRODUCERS_SUCCESS,
  payload,
});

const loadProducersFailure = (payload) => ({
  type: Types.LOAD_PRODUCERS_FAILURE,
  payload,
});

export default {
  loadProducersRequest,
  loadProducersSuccess,
  loadProducersFailure,
};
