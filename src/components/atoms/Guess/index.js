import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLoginAction } from "../../../redux";
import Allert from "../Allert";
import Loading from "../Loading";

const Guess = ({ children, path }) => {
  const dispatch = useDispatch();
  const isLoading = false;

  useEffect(() => {
    if (path !== "/home") {
      dispatch(isLoginAction(false));
    }
  }, [path])

  return (
    <div id="wrapper">
      <Loading loading={isLoading} />
      <Allert />
      {children}
    </div>
  )
};

export default Guess