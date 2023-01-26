import { Button } from "antd"
import AfterInstallation from 'components/AfterInstallation'
import OverlayLoading from "components/Common/OverlayLoading"
import MainLayout from 'layouts/MainLayout'
import { useCallback, useState } from "react"

const HomePage = () => {
  return (
    <MainLayout>
      <AfterInstallation />
      <TestLoading />
    </MainLayout>
  )
}

export default HomePage

const TestLoading = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = useCallback(
    () => {
      console.log("clicked")
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000);
    },
    [],
  )
  
  return (<div className="text-center p-8">
    <Button type="primary" onClick={handleClick}>Test Loading for 5 seconds</Button>
    {loading && <OverlayLoading active={true} />}
  </div>)
}