export const request = (state, payload, initialState) => {
  return {
    ...state,
    producers: [],
    isLoadingProducers: true,
    error: { ...initialState.error },
  };
};

export const success = (state, payload, initialState) => {
  return {
    ...state,
    isLoadingProducers: false,
    producers: payload,
    error: { ...initialState.error },
  };
};

export const failure = (state) => ({
  ...state,
  isLoadingProducers: false,
  error: {
    msg: "Ops! Não conseguimos carregar os produtores.",
    hasError: true,
  },
});
