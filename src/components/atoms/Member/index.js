import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginSelector } from "../../../redux";
import Allert from "../Allert";

const Member = ({ children }) => {

  const isLogin = useSelector(isLoginSelector, shallowEqual);
  console.log('isLogin', isLogin)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate("/sign-in");
  }, [isLogin]);

  return (
    <div id="wrapper">
      <Allert />
      {children}
    </div>
  )

}

export default Member