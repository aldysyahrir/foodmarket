
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FoodDetail, Home, NotFound, Order, OrderInProgress, PaymentAddress, Profile, SignIn, SignUp, SignUpAddress, Splash, SuccessOrder, SuccessSignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/sign-up-address" element={<SignUpAddress/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/food-detail" element={<FoodDetail/>} />
      <Route path="/payment-address" element={<PaymentAddress/>} />
      <Route path="/success-sign-up" element={<SuccessSignUp/>} />
      <Route path="/succes-order" element={<SuccessOrder/>} />
      <Route path="/order-in-progress" element={<OrderInProgress/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
