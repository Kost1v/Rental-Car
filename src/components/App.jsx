import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import CarInfoPage from "../pages/CarInfoPage/CarInfoPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import css from "./App.module.css";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div className={css.wrapper}>
      <Layout />
      <main className={css.app}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
