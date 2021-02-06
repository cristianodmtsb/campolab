export const request = (state, payload, initialState) => {
  return {
    ...state,
    categories: [],
    isLoadingCategories: true,
    error: { ...initialState.error },
  };
};

export const success = (state, payload, initialState) => {
  return {
    ...state,
    isLoadingCategories: false,
    categories: [...payload],
    error: { ...initialState.error },
  };
};

export const failure = state => ({
  ...state,
  isLoadingCategories: false,
  error: {
    msg: 'Ops! Não conseguimos carregar suas chamadas.',
    hasError: true,
  },
});
