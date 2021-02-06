export const request = (state, payload, initialState) => {
  return {
    ...state,
    producer: {},
    isLoadingProducerDetails: true,
    error: { ...initialState.error },
  };
};

export const success = (state, payload, initialState) => {
  return {
    ...state,
    isLoadingProducerDetails: false,
    producer: payload,
    error: { ...initialState.error },
  };
};

export const failure = (state) => ({
  ...state,
  isLoadingProducerDetails: false,
  error: {
    msg: "Ops! Não conseguimos carregar os produtores.",
    hasError: true,
  },
});
