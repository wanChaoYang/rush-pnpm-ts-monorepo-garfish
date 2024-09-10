import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "@/views/Home";
const RootComponent = (appInfo) => {
  return (
    <BrowserRouter basename={appInfo.basename}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RootComponent;
