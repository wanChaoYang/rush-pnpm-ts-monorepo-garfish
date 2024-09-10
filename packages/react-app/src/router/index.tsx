import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
// import Layout from "@/view/layout";
import lazyLoad from "./lazyLoad";
export const routers: Array<object> = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/login",
    element: lazyLoad(React.lazy(() => import("@/views/login"))),
    meta: {
      unwntedAuth: true, //不需要登录权限
      title: "登录页",
      key: "login",
    },
  },
   
];
const GetRouters = () => {
  return useRoutes([...routers]);
};
export default GetRouters;