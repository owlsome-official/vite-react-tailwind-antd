import { useNavigate } from "react-router";

export const withNavigate = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
};
