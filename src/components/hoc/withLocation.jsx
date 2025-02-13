import React from "react";
import { useLocation } from "react-router";

export function withLocation(Component) {
  return (props) => {
    const location = useLocation();
    return <Component location={location} {...props} />;
  };
}
