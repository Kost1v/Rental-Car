import { useSelector } from "react-redux";
import { selectCars, selectTotalFiltersCars } from "../../redux/selectors";
import css from "./CarsList.module.css";
import CarsListItem from "../CarsListItem/CarsListItem";
const CarsList = () => {
  const cars = useSelector(selectCars);
  const filtersCars = useSelector(selectTotalFiltersCars);

  return (
    <ul className={css.list}>
      {cars?.map((car) => {
        return (
          <li key={car.id} className={css.listItem}>
            <CarsListItem car={car} />
          </li>
        );
      })}
      {filtersCars?.map((car) => {
        return (
          <li key={car.id} className={css.listItem}>
            <CarsListItem car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarsList;