import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./Layout.module.css";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(css.links, isActive && css.active);

const Layout = () => {
  return (
    <header className={css.wrapper}>
      <Logo />
      <div className={css.links}>
        <NavLink to="/" className={buildCssClasses}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildCssClasses}>
          Catalog
        </NavLink>
      </div>
    </header>
  );
};

export default Layout;
