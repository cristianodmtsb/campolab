import Switch from "../../../../utils/functors/Switch";

import INITIAL_STATE from "../state";
import Types from "../actions/actionTypes";

import * as loadProducers from "./operations/loadProducers";
import * as loadProducerDetails from "./operations/loadProducerDetails";
import * as createProducer from "./operations/createProducer";
import * as updateProducer from "./operations/updateProducer";
import * as deleteProducer from "./operations/deleteProducer";

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  return Switch.on(type, state, payload, INITIAL_STATE)
    .case(Types.LOAD_PRODUCERS_REQUEST, loadProducers.request)
    .case(Types.LOAD_PRODUCERS_SUCCESS, loadProducers.success)
    .case(Types.LOAD_PRODUCERS_FAILURE, loadProducers.failure)

    .case(Types.LOAD_PRODUCER_DETAILS_REQUEST, loadProducerDetails.request)
    .case(Types.LOAD_PRODUCER_DETAILS_SUCCESS, loadProducerDetails.success)
    .case(Types.LOAD_PRODUCER_DETAILS_FAILURE, loadProducerDetails.failure)

    .case(Types.CREATE_PRODUCER_REQUEST, createProducer.request)
    .case(Types.CREATE_PRODUCER_SUCCESS, createProducer.success)
    .case(Types.CREATE_PRODUCER_FAILURE, createProducer.failure)

    .case(Types.UPDATE_PRODUCER_REQUEST, updateProducer.request)
    .case(Types.UPDATE_PRODUCER_SUCCESS, updateProducer.success)
    .case(Types.UPDATE_PRODUCER_FAILURE, updateProducer.failure)

    .case(Types.DELETE_PRODUCER_REQUEST, deleteProducer.request)
    .case(Types.DELETE_PRODUCER_SUCCESS, deleteProducer.success)
    .case(Types.DELETE_PRODUCER_FAILURE, deleteProducer.failure)

    .default(state);
};

export default reducer;
