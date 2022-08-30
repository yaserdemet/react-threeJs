import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Base from "../pages/Base";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
