import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppInfo } from "@garfish/bridge-react-v18";
import App from "./App";
import Home from "@/views/Home";
const RootComponent = (appInfo: AppInfo) => {
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
