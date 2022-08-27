
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useRouter } from "./hook";
import { FoodDetail, Home, NotFound, Order, OrderInProgress, PaymentAddress, Profile, SignIn, SignUp, SignUpAddress, Splash, SuccessOrder, SuccessSignUp } from "./pages";

function App() {

  const routes = [
    { type: "guess", path: "/", element: Splash },
    { type: "guess", path: "/sign-in", element: SignIn },
    { type: "guess", path: "/sign-up", element: SignUp },
    { type: "guess", path: "/sign=Up-address", element: SignUpAddress },
    { type: "guess", path: "/home", element: Home },
    { path: "/order", element: Order },
    { path: "/profile", element: Profile },
    { path: "/food-detail", element: FoodDetail },
    { path: "/payment-address", element: PaymentAddress },
    { path: "/success-sign-Up", element: SuccessSignUp },
    { path: "/success-order", element: SuccessOrder },
    { path: "/order-in-progress", element: OrderInProgress },
  ];

  const route = useRouter(routes)

  return (
    <BrowserRouter>
      <Routes>
        {route}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
