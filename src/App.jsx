import { Route, Routes } from "react-router";

import AboutPage from "pages/AboutPage";
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import { ABOUT_PATH, AUTH_PATH } from "utils/constants";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={ABOUT_PATH} element={<AboutPage />} />
      <Route path={AUTH_PATH} element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
