import React, { useEffect } from "react";
import Login from "../login/login";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  let userLoggedIn = localStorage.getItem("loggedIn");
  // useNavigate
  let navigate = useNavigate();
  console.log("credentials..", userLoggedIn);
  return userLoggedIn ? <Outlet /> : <Navigate to="login"></Navigate>
}

export default ProtectedRoute;
