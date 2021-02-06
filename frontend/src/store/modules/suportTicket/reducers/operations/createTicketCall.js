export const request = (state, payload, initialState) => {
  return {
    ...state,
    isCreatingTicket: true,
    createTicketSuccess: false,
    createTicketFailure: false,
    error: { ...initialState.error },
  };
};

export const success = (state, payload, initialState) => {
  return {
    ...state,
    isCreatingTicket: false,
    createTicketSuccess: true,
    createTicketFailure: false,
    error: { ...initialState.error },
  };
};

export const failure = state => ({
  ...state,
  isCreatingTicket: false,
  createTicketSuccess: false,
  createTicketFailure: true,
  error: {
    msg: 'Ops! Não conseguimos salvar a chamada.',
    hasError: true,
  },
});
