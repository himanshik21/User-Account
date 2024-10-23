import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUser from "./components/LoginUser";
import RegisterUser from "./components/RegisterUser";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import "./App.css";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/edit-profile" element= {<EditProfile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
