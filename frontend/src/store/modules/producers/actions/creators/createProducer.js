import Types from "../actionTypes";

const createProducerRequest = (payload) => ({
  type: Types.CREATE_PRODUCER_REQUEST,
  payload,
});

const createProducerSuccess = (payload) => ({
  type: Types.CREATE_PRODUCER_SUCCESS,
  payload,
});

const createProducerFailure = (payload) => ({
  type: Types.CREATE_PRODUCER_FAILURE,
  payload,
});

export default {
  createProducerRequest,
  createProducerSuccess,
  createProducerFailure,
};
