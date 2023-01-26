import { Layout, theme } from "antd";

const { Header } = Layout;

const navbarClass =
  "text-white text-h5 flex flex-col whitespace-nowrap overflow-hidden text-ellipsis";
const styles = {
  navbarTitleFullSize: navbarClass,
  navbarTitle: navbarClass + " max-w-[calc(100vw-200px)]",
};
const NavBar = ({ fullSize }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Header
      data-testid="navbarContainer"
      className="fixed flex z-10 w-full"
      style={{
        backgroundColor: colorPrimary,
        paddingInline: 0,
      }}
    >
      <div className="h-full pl-[5%] flex items-center gap-4 w-full">
        <a href="/">
          <div data-testid="navbarLogo" className="w-48 h-12 bg-white text-center">LOGO</div>
        </a>
        <div
          data-testid="navbarTitle"
          className={fullSize ? styles.navbarTitleFullSize : styles.navbarTitle}
        >
          <div className="leading-8 font-bold text-[2.9vw] sm:text-h5">
            {import.meta.env.VITE_PROJECT_NAME}
          </div>
          <div className="leading-3 font-bold text-[2vw] sm:text-small uppercase pb-1">
            {import.meta.env.VITE_PROJECT_DESCRIPTION}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default NavBar;
