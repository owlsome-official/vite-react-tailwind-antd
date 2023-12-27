import { ConfigProvider, Watermark } from "antd";
import thTH from "antd/locale/th_TH";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

if (import.meta.env.PROD) console.log = () => null; // Tricky for production (but still not safe)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        locale={thTH}
        theme={{
          token: {
            colorPrimary: "#FFBE98",
            colorTextBase: "#522a28",
            colorLink: "#964F4C",
            wireframe: true,
          },
        }}
      >
        {import.meta.env.PROD ? (
          <App />
        ) : (
          <Watermark content={["ทดสอบระบบ", import.meta.env.MODE]}>
            <App />
          </Watermark>
        )}
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
