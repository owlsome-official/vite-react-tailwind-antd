import PlainCenterLayout from "layouts/PlainCenterLayout";
import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <PlainCenterLayout>
      <div className="text-center text-h1 font-bold">
        <div className="leading-none">404</div>
        <div>Not Found</div>
      </div>
      <div className="mb-4 text-p">Go back to the home.</div>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go Home
      </button>
    </PlainCenterLayout>
  );
};

export default NotFoundPage;
