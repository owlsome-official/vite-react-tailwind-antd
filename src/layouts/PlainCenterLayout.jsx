import React from 'react'

const PlainCenterLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  )
}

export default PlainCenterLayout