import { useEffect } from "react";
import containerFactory from "../containerFactory";
import { useDispatch, useSelector } from "react-redux";
import { producerActions } from "../../../store/rootActions";
import { producerSelector } from "../../../store/rootSelector";

const ProducersContainer = ({ children }) => {
  const dispatch = useDispatch();

  const producers = useSelector(producerSelector.selectProducers);

  const { isLoadingProducers } = useSelector(producerSelector.selectLoading);

  const error = useSelector(producerSelector.selectError);

  useEffect(() => {
    dispatch(producerActions.loadProducersRequest());
  }, [dispatch]);

  return containerFactory(children, {
    producers,
    isLoadingProducers,
    errorMsg: error.msg,
    hasError: error.hasError,
  });
};

export default ProducersContainer;
