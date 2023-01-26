import { theme } from "antd";
import React from "react";
import packageJson from "../../../package.json";

const Version = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <div
      data-testid="versionContainer"
      className="cursor-default fixed top-1 right-1 z-20 m-1"
      style={{ color: colorPrimary }}
    >
      v{packageJson.version}
    </div>
  );
};

export default Version;
