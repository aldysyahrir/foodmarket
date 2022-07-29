
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FoodDetail, Home, NotFound, Order, Profile, SignIn, SignUp, SignUpAddress, Splash } from "./pages";

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
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
