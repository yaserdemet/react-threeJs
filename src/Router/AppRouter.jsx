import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Base from "../pages/Base";
import Details from "../pages/Details";
import Error from "../pages/Error";
import Earth from "../pages/Earth";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Earth />} />
          <Route path="/error" element={<Error />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
