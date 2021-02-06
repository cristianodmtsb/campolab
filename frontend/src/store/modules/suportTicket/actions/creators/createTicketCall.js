import Types from '../actionTypes';

const createTicketCallRequest = payload => ({
  type: Types.CREATE_TICKET_CALL_REQUEST,
  payload,
});

const createTicketCallSuccess = payload => ({
  type: Types.CREATE_TICKET_CALL_SUCCESS,
  payload,
});

const createTicketCallFailure = payload => ({
  type: Types.CREATE_TICKET_CALL_FAILURE,
  payload,
});

export default {
  createTicketCallRequest,
  createTicketCallSuccess,
  createTicketCallFailure,
};
