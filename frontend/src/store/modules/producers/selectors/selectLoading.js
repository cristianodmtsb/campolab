import { Maybe } from "../../../../utils/functors";

export default (state) =>
  Maybe.of(state)
    .map((state) => state.producers)
    .map((producers) => ({
      isLoadingProducers: producers.isLoadingProducers,
      isLoadingProducerDetails: producers.isLoadingProducerDetails,
      isCreatingProducer: producers.isCreatingProducer,
      isUpdatingProducer: producers.isUpdatingProducer,
      isDeletingProducer: producers.isDeletingProducer,
    }))
    .get({
      isLoadingProducers: false,
      isLoadingProducerDetails: false,
      isCreatingProducer: false,
      isUpdatingProducer: false,
      isDeletingProducer: false,
    });
