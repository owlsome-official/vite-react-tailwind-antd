import PlainCenterLayout from "layouts/PlainCenterLayout";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <PlainCenterLayout>
      <div className="text-center text-h1 font-bold">About Page</div>
      <div className="text-center text-h3">In Progress...</div>
      <div className="mb-4 text-p">Go back to the home.</div>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go Home
      </button>
    </PlainCenterLayout>
  );
};

export default AboutPage;
