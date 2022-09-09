
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { setAuthorizationHeaders } from "./configs/axios";
import { useRouter } from "./hook";
import { FoodDetail, Home, NotFound, Order, OrderInProgress, PaymentAddress, Profile, SignIn, SignUp, SignUpAddress, Splash, SuccessOrder, SuccessSignUp } from "./pages";
import { isLoginSelector, tokenDataSelector, userDataAction, userDataSelector } from "./redux";

function App() {

  const routes = [
    { type: "guess", path: "/sign-in", element: SignIn },
    { type: "guess", path: "/sign-up", element: SignUp },
    { type: "guess", path: "/sign-up-address", element: SignUpAddress },
    { type: "guess", path: "/home", element: Home },

    { path: "/order", element: Order },
    { path: "/profile", element: Profile },
    { path: "/food-detail/:id", element: FoodDetail },
    { path: "/payment-address", element: PaymentAddress },
    { path: "/success-sign-Up", element: SuccessSignUp },
    { path: "/success-order", element: SuccessOrder },
    { path: "/order-in-progress", element: OrderInProgress },
  ];

  const dispatch = useDispatch();

  const route = useRouter(routes);

  const isLogin = useSelector(isLoginSelector, shallowEqual);
  const token = useSelector(tokenDataSelector, shallowEqual);
  const user = useSelector(userDataSelector, shallowEqual);

  useEffect(() => {
    //jika dia sudah login maka isi token ke dalam instance
    if (isLogin) {
      setAuthorizationHeaders(token)
      if (user.email === "") {
        user
          .getUser()
          .then((res) => {
            dispatch(userDataAction(res.data));
          })
      }
    }
  }, [isLogin, user])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        {route}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
