export const request = (state, payload, initialState) => {
  return {
    ...state,
    ticketCalls: [],
    isLoadingTicket: true,
    createTicketSuccess: false,
    createTicketFailure: false,
    error: { ...initialState.error },
  };
};

export const success = (state, payload, initialState) => {
  return {
    ...state,
    isLoadingTicket: false,
    ticketCalls: payload,
    error: { ...initialState.error },
  };
};

export const failure = (state) => ({
  ...state,
  isLoadingTicket: false,
  error: {
    msg: "Ops! Não conseguimos carregar suas chamadas.",
    hasError: true,
  },
});
