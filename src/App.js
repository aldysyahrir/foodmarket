
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { SignIn, SignUp, SignUpAddress, Splash } from "./pages";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/sign-up-address" element={<SignUpAddress/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
