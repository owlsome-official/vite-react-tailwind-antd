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
      className="fixed z-10 flex w-full drop-shadow-md"
      style={{
        backgroundColor: colorPrimary,
        paddingInline: 0,
      }}
    >
      <div className="flex h-full w-full items-center gap-4 pl-[5%]">
        <a href="/">
          <div
            data-testid="navbarLogo"
            className="h-12 w-48 bg-white text-center"
          >
            LOGO
          </div>
        </a>
        <div
          data-testid="navbarTitle"
          className={fullSize ? styles.navbarTitleFullSize : styles.navbarTitle}
        >
          <div className="text-[2.9vw] font-bold leading-8 sm:text-h5">
            {import.meta.env.VITE_PROJECT_NAME}
          </div>
          <div className="pb-1 text-[2vw] font-bold uppercase leading-3 sm:text-small">
            {import.meta.env.VITE_PROJECT_DESCRIPTION}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default NavBar;
