import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLoginAction, refreshTokenDataAction, tokenDataAction, userDataAction } from "../../../redux";
import Allert from "../Allert";
import Loading from "../Loading";

const emptyData = {
  address: "",
  avatar: "",
  city: "",
  email: "",
  house_number: "",
  id: "",
  name: "",
  phone: null,
  rules: ""
}

const Guess = ({ children, path }) => {
  const dispatch = useDispatch();
  const isLoading = false;

  useEffect(() => {
    if (path !== "/home") {
      dispatch(isLoginAction(false));
      dispatch(userDataAction(emptyData))
      dispatch(tokenDataAction(""))
      dispatch(refreshTokenDataAction(""))
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