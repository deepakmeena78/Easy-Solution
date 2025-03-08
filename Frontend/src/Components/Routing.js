import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import HelpById from "./Help/HelpDetails";
import SignUp from "./SignUpIn/SignUp";
import SignIn from "./SignUpIn/SignIn";
import AllHelps from "./Help/AllHelps";
import CategoryPage from "./CategoryPage";
import Dashboard from "./Profile/Dashboard";
import Profile from "./Profile/Profile";
import HelpList from "./Profile/HelpList";
import Prime from "./Profile/Prime";
import Notification from "./Profile/Notification";
import ProtectedRoute from "./Authentication/ProtectedRoute";

const Routing = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<AllHelps />} />
      <Route path="/help-details" element={<HelpById />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/category" element={<CategoryPage />} />

      {/* Protected Routes */}
      <Route path="/account/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/account/profile" element={<ProtectedRoute element={<Profile />} />} />
      <Route path="/account/help" element={<ProtectedRoute element={<HelpList />} />} />
      <Route path="/account/prime" element={<ProtectedRoute element={<Prime />} />} />
      <Route path="/account/notifications" element={<ProtectedRoute element={<Notification />} />} />

      {/* 404 Page */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
};

export default Routing;
