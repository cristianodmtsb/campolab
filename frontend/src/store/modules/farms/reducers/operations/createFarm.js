export const request = (state, payload, initialState) => {
  return {
    ...state,
    isCreatingFarm: true,
    createFarmSuccess: false,
    createFarmFailure: false,
    error: { ...initialState.error },
  };
};

export const success = (state, payload, initialState) => {
  return {
    ...state,
    isCreatingFarm: false,
    createFarmSuccess: true,
    createFarmFailure: false,
    error: { ...initialState.error },
  };
};

export const failure = (state) => ({
  ...state,
  isCreatingFarm: false,
  createFarmSuccess: false,
  createFarmFailure: true,
  error: {
    msg: "Ops! Não conseguimos criar Produtor.",
    hasError: true,
  },
});
