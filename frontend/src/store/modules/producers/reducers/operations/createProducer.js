export const request = (state, payload, initialState) => {
  return {
    ...state,
    isCreatingProducer: true,
    createProducerSuccess: false,
    createProducerFailure: false,
    error: { ...initialState.error },
  };
};

export const success = (state, payload, initialState) => {
  return {
    ...state,
    isCreatingProducer: false,
    createProducerSuccess: true,
    createProducerFailure: false,
    error: { ...initialState.error },
  };
};

export const failure = (state) => ({
  ...state,
  isCreatingProducer: false,
  createProducerSuccess: false,
  createProducerFailure: true,
  error: {
    msg: "Ops! Não conseguimos criar Produtor.",
    hasError: true,
  },
});
