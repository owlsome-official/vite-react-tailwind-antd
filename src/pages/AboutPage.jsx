import PlainCenterLayout from "layouts/PlainCenterLayout";
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate()
  return (
    <PlainCenterLayout>
      <div className="font-bold text-h1 text-center">About Page</div>
      <div className="text-h3 text-center">In Progress...</div>
      <div className="text-p mb-4">Go back to the home.</div>
      <button className="btn btn-primary" onClick={() => navigate('/')}>Go Home</button>
    </PlainCenterLayout>
  )
}

export default AboutPage