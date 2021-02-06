import Types from "../actionTypes";

const loadProducerDetailsRequest = (payload) => ({
  type: Types.LOAD_PRODUCER_DETAILS_REQUEST,
  payload,
});

const loadProducerDetailsSuccess = (payload) => ({
  type: Types.LOAD_PRODUCER_DETAILS_SUCCESS,
  payload,
});

const loadProducerDetailsFailure = (payload) => ({
  type: Types.LOAD_PRODUCER_DETAILS_FAILURE,
  payload,
});

export default {
  loadProducerDetailsRequest,
  loadProducerDetailsSuccess,
  loadProducerDetailsFailure,
};
