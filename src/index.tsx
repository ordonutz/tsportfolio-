import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {
  MantineProvider,
  MantineThemeOverride,
  useMantineTheme,
} from "@mantine/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);
