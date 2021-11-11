import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useLocation, Navigate } from "react-router-dom";

const RoutesC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

const RequireAuth = ({ children }) => {
  const { state } = useLocation();
  let location = useLocation();
  if (!state?.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default RoutesC;
