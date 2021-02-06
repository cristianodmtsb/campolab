import Types from "../actionTypes";

const deleteProducerRequest = (payload) => ({
  type: Types.DELETE_PRODUCER_REQUEST,
  payload,
});

const deleteProducerSuccess = (payload) => ({
  type: Types.DELETE_PRODUCER_SUCCESS,
  payload,
});

const deleteProducerFailure = (payload) => ({
  type: Types.DELETE_PRODUCER_FAILURE,
  payload,
});

export default {
  deleteProducerRequest,
  deleteProducerSuccess,
  deleteProducerFailure,
};
