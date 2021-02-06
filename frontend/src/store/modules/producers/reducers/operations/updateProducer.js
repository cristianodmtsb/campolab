export const request = (state, payload, initialState) => ({
  ...state,
  isUpdatingProducer: true,
  updateProducerSuccess: false,
  error: { ...initialState.error },
});

export const success = (state) => {
  return {
    ...state,
    isUpdatingProducer: false,
    updateProducerSuccess: true,
  };
};

export const update = (state, payload) => {
  return {
    ...state,
    producer: payload,
  };
};

export const failure = (state) => ({
  ...state,
  isUpdatingProducer: false,
  updateProducerSuccess: false,
  error: { msg: "Ops! Não foi possível editar seus dados", hasError: true },
});
