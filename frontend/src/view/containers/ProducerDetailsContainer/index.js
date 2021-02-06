import { useEffect } from "react";
import containerFactory from "../containerFactory";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { producerActions } from "../../../store/rootActions";
import { producerSelector } from "../../../store/rootSelector";

const ProducerDetailsContainer = ({ children }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const producer = useSelector(producerSelector.selectProducer);

  const { isLoadingProducerDetails, updateProducerSuccess } = useSelector(
    producerSelector.selectLoading
  );

  const error = useSelector(producerSelector.selectError);

  useEffect(() => {
    dispatch(producerActions.loadProducerDetailsRequest(id));
  }, [dispatch]);

  const handleUpdateProducer = (values) => {
    dispatch(producerActions.updateProducerRequest({ id, values }));
  };

  return containerFactory(children, {
    producer,
    isLoadingProducerDetails,
    updateProducerSuccess,
    handleUpdateProducer,
    errorMsg: error.msg,
    hasError: error.hasError,
  });
};

export default ProducerDetailsContainer;
