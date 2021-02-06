export const request = (state, payload, initialState) => ({
  ...state,
  isDeletingProducer: true,
  deleteProducerSuccess: false,
  error: { ...initialState.error },
});

export const success = (state) => {
  return {
    ...state,
    isDeletingProducer: false,
    deleteProducerSuccess: true,
  };
};

export const failure = (state) => ({
  ...state,
  isDeletingProducer: false,
  deleteProducerSuccess: false,
  error: { msg: "Ops! Não foi possível editar seus dados", hasError: true },
});
