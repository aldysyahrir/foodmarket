
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Order, Profile, SignIn, SignUp, SignUpAddress, Splash } from "./pages";

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
    </Routes>
  </BrowserRouter>
  )
}

export default App;
