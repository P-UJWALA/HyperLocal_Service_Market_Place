import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";



const AppRoutes = () => {
  return (
     <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Later */}
      {/* <Route path="/register" element={<Register />} /> */}

      {/* Protected Routes */}
      {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
      {/* <Route path="/customer/home" element={<CustomerHome />} /> */}
      {/* <Route path="/provider/dashboard" element={<ProviderDashboard />} /> */}
    </Routes>
  );
};

export default AppRoutes;