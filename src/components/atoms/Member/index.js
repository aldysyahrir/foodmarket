import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Member = ({ children }) => {
  const isLogin = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate("/sign-in");
  }, [isLogin]);

  return <div id="wrapper">{children}</div>;

}

export default Member