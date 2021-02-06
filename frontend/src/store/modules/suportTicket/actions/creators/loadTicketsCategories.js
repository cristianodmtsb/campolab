import Types from '../actionTypes';

const loadTicketsCategoriesRequest = () => ({
  type: Types.LOAD_TICKET_CATEGORIES_REQUEST,
});

const loadTicketsCategoriesSuccess = categories => ({
  type: Types.LOAD_TICKET_CATEGORIES_SUCCESS,
  payload: categories,
});

const loadTicketsCategoriesFailure = payload => ({
  type: Types.LOAD_TICKET_CATEGORIES_FAILURE,
  payload,
});

export default {
  loadTicketsCategoriesRequest,
  loadTicketsCategoriesSuccess,
  loadTicketsCategoriesFailure,
};
