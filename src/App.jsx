import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Vendor_register from "./components/Vendor_register";
import LoginVendor from "./components/LoginVendor";
const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path = "/vendor_register" element = {< Vendor_register />} />
      <Route path="/loginvendor" element={<LoginVendor />} />
    </Routes>
  );
};

export default App;
