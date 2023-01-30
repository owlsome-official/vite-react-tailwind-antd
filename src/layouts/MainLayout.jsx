import { Layout } from "antd";

import NavBar from "components/Common/NavBar";
import Version from "components/Common/Version";

const { Content } = Layout;

const MainLayout = ({ children, style, navBarfullSize = true }) => {
  return (
    <Layout
      data-testid="mainLayoutContainer"
      className="layout-bg relative min-h-screen"
    >
      <NavBar fullSize={navBarfullSize} />
      <Content
        data-testid="mainLayoutContent"
        className={"mt-[64px] px-[5%] pb-[5%]"}
        style={style}
      >
        <div className="mb-4 mt-4 rounded-md border-2 bg-white p-4 shadow-md">
          {children}
        </div>
      </Content>
      <Version />
    </Layout>
  );
};

export default MainLayout;
