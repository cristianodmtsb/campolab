import Switch from "../../../../utils/functors/Switch";

import INITIAL_STATE from "../state";
import Types from "../actions/actionTypes";

import * as createTicketCall from "./operations/createTicketCall";
import * as loadTickets from "./operations/loadTickets";
import * as loadTicketsCateogires from "./operations/loadTicketsCateogires";

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  return Switch.on(type, state, payload, INITIAL_STATE)
    .case(Types.LOAD_TICKET_CALLS_REQUEST, loadTickets.request)
    .case(Types.LOAD_TICKET_CALLS_SUCCESS, loadTickets.success)
    .case(Types.LOAD_TICKET_CALLS_FAILURE, loadTickets.failure)

    .case(Types.CREATE_TICKET_CALL_REQUEST, createTicketCall.request)
    .case(Types.CREATE_TICKET_CALL_SUCCESS, createTicketCall.success)
    .case(Types.CREATE_TICKET_CALL_FAILURE, createTicketCall.failure)

    .case(Types.LOAD_TICKET_CATEGORIES_REQUEST, loadTicketsCateogires.request)
    .case(Types.LOAD_TICKET_CATEGORIES_SUCCESS, loadTicketsCateogires.success)
    .case(Types.LOAD_TICKET_CATEGORIES_FAILURE, loadTicketsCateogires.failure)

    .default(state);
};

export default reducer;
