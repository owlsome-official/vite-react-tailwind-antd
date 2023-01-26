import PlainCenterLayout from "layouts/PlainCenterLayout"
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <PlainCenterLayout>
      <div className="font-bold text-h1 text-center">
        <div className="leading-none">404</div>
        <div>Not Found</div>
      </div>
      <div className="text-p mb-4">Go back to the home.</div>
      <button className="btn btn-primary" onClick={() => navigate('/')}>Go Home</button>
    </PlainCenterLayout>
  )
}

export default NotFoundPage
