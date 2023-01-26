import { Layout } from "antd";

import NavBar from "components/Common/NavBar";
import Version from "components/Common/Version";

const { Content } = Layout;

const MainLayout = ({
  children,
  style,
  navBarfullSize = true,
  showProjectName = true,
  showAction = true,
}) => {
  return (
    <Layout
      data-testid="mainLayoutContainer"
      className="relative layout-bg min-h-screen"
    >
      <NavBar fullSize={navBarfullSize} />
      <Content
        data-testid="mainLayoutContent"
        className={"px-[5%] pb-[5%] mt-[64px]"}
        style={style}
      >
        <div className="bg-white mb-4 border-2 rounded-md p-4 shadow-md mt-4">
          {children}
        </div>
      </Content>
      <Version />
    </Layout>
  );
};

export default MainLayout;
