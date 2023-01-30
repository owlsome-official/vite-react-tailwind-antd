import React from "react";

const PlainCenterLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default PlainCenterLayout;
