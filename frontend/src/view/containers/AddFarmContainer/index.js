import containerFactory from "../containerFactory";
import { useDispatch, useSelector } from "react-redux";
import { farmActions } from "../../../store/rootActions";
import { farmsSelector } from "../../../store/rootSelector";

const AddFarmContainer = ({ children }) => {
  const dispatch = useDispatch();

  const { isCreatingFarm, createFarmsuccess } = useSelector(
    farmsSelector.selectLoading
  );

  const error = useSelector(farmsSelector.selectError);

  const handleCreateFarm = (values) => {
    dispatch(farmActions.createFarmRequest(values));
  };

  return containerFactory(children, {
    isCreatingFarm,
    createFarmsuccess,
    handleCreateFarm,
    errorMsg: error.msg,
    hasError: error.hasError,
  });
};

export default AddFarmContainer;
