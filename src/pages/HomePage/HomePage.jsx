import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { getBrands } from "../../redux/operations";
const HomePage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  useEffect(() => {
    if (cars.length > 0) dispatch(getBrands());
  }, [dispatch, cars]);
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to={"/catalog"} className={css.button}>
        View Catalog
      </Link>
    </div>
  );
};

export default HomePage;
