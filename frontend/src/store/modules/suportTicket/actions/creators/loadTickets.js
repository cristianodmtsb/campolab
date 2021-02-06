import Types from '../actionTypes';

const loadTicketsRequest = () => ({
  type: Types.LOAD_TICKET_CALLS_REQUEST,
});

const loadTicketsSuccess = ({ tickets }) => ({
  type: Types.LOAD_TICKET_CALLS_SUCCESS,
  payload: { tickets },
});

const loadTicketsFailure = payload => ({
  type: Types.LOAD_TICKET_CALLS_FAILURE,
  payload,
});

export default {
  loadTicketsRequest,
  loadTicketsSuccess,
  loadTicketsFailure,
};
