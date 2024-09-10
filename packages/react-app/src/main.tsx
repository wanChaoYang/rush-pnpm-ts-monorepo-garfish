// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { reactBridge } from "@garfish/bridge-react-v18";
import RootComponent from "./root";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

export const provider = reactBridge({
  el: "#root", // 子应用挂载点，若子应用构建成 js ，则不需要传递该值
  rootComponent: RootComponent, // 根组件, bridge 会默认传递 basename、dom、props 等信息到根组件
  errorBoundary: () => <ErrorBoundary />, // 设置应用的 errorBoundary
});

if (!window.__GARFISH__) {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(<RootComponent basename={"/apps/react-app"} />);
}
