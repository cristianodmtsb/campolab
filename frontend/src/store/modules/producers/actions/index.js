import loadProducers from "./creators/loadProducers";
import loadProducerDetails from "./creators/loadProducerDetails";
import createProducer from "./creators/createProducer";
import updateProducer from "./creators/updateProducer";
import deleteProducer from "./creators/deleteProducer";

export default {
  ...loadProducers,
  ...loadProducerDetails,
  ...createProducer,
  ...updateProducer,
  ...deleteProducer,
};
