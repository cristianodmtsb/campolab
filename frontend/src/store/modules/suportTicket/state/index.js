const loading = {
  isLoadingTickets: false,
};

export default {
  ...loading,
  error: { msg: "", hasError: false },
  ticketCalls: [],
};
