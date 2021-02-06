const loading = {
  isLoadingProducers: false,
  isLoadingProducerDetails: false,
  isCreatingProducer: false,
  isUpdatingProducer: false,
  isDeletingProducer: false,
};

export default {
  ...loading,
  error: { msg: "", hasError: false },
  producers: [],
  producer: {},
};
