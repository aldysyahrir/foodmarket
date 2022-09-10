
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { setAuthorizationHeaders } from "./configs/axios";
import { user } from "./configs/constans";
import { useRouter } from "./hook";
import { EditProfile, FoodDetail, Home, NotFound, Order, OrderInProgress, PaymentAddress, Profile, SignIn, SignUp, SignUpAddress, Splash, SuccessOrder, SuccessSignUp, UpdateAddress, UpdatePassword } from "./pages";
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
    { path: "/payment-address/:id/:amount", element: PaymentAddress },
    { path: "/success-sign-Up", element: SuccessSignUp },
    { path: "/success-order", element: SuccessOrder },
    { path: "/order-in-progress", element: OrderInProgress },
    { path: "/edit-profile", element: EditProfile },
    { path: "/update-address", element: UpdateAddress},
    { path: "/update-password", element: UpdatePassword},
  ];

  const dispatch = useDispatch();

  const route = useRouter(routes);

  const isLogin = useSelector(isLoginSelector, shallowEqual);
  const token = useSelector(tokenDataSelector, shallowEqual);
  const userData = useSelector(userDataSelector, shallowEqual);

  useEffect(() => {
    //jika dia sudah login maka isi token ke dalam instance
    if (isLogin) {
      setAuthorizationHeaders(token)
      if (userData.email === "") {
        user
          .getUser()
          .then((res) => {
            dispatch(userDataAction(res.data));
          })
      }
    }
  }, [isLogin, userData])


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
