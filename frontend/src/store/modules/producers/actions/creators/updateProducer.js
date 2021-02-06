import Types from "../actionTypes";

const updateProducerRequest = (payload) => ({
  type: Types.UPDATE_PRODUCER_REQUEST,
  payload,
});

const updateProducerSuccess = (payload) => ({
  type: Types.UPDATE_PRODUCER_SUCCESS,
  payload,
});

const updateProducerFailure = (payload) => ({
  type: Types.UPDATE_PRODUCER_FAILURE,
  payload,
});

export default {
  updateProducerRequest,
  updateProducerSuccess,
  updateProducerFailure,
};
