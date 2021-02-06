import containerFactory from "../containerFactory";
import { useDispatch, useSelector } from "react-redux";
import { producerActions } from "../../../store/rootActions";
import { producerSelector } from "../../../store/rootSelector";

const AddProducerContainer = ({ children }) => {
  const dispatch = useDispatch();

  const { isCreatingProducer, createProducerSuccess } = useSelector(
    producerSelector.selectLoading
  );

  const error = useSelector(producerSelector.selectError);

  const handleCreateProducer = (values) => {
    dispatch(producerActions.createProducerRequest(values));
  };

  return containerFactory(children, {
    isCreatingProducer,
    createProducerSuccess,
    handleCreateProducer,
    errorMsg: error.msg,
    hasError: error.hasError,
  });
};

export default AddProducerContainer;
