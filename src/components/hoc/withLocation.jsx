import React from "react";
import { useLocation } from "react-router-dom";

export function withLocation(Component) {
  return (props) => {
    const location = useLocation();
    return <Component location={location} {...props} />;
  };
}
