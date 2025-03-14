import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Vendor_register from "./components/Vendor_register";
import LoginVendor from "./components/LoginVendor";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageVendors from "./pages/ManageVendors";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {/* User & Vendor Routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/vendor_register" element={<Vendor_register />} />
      <Route path="/loginvendor" element={<LoginVendor />} />

      {/* Admin Routes */}
      <Route path="/admin-login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin-login" />} />
      <Route path="/admin/users" element={isAuthenticated ? <ManageUsers /> : <Navigate to="/admin-login" />} />
      <Route path="/admin/vendors" element={isAuthenticated ? <ManageVendors /> : <Navigate to="/admin-login" />} />
    </Routes>
  );
};

export default App;
