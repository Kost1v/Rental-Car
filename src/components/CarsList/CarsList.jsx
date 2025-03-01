import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import css from "./CarsList.module.css";
import CarsListItem from "../CarsListItem/CarsListItem";
const CarsList = () => {
  const cars = useSelector(selectCars);

  return (
    <ul className={css.list}>
      {cars?.map(
        (car) => {
          return (
            <li key={car.id} className={css.listItem}>
              <CarsListItem car={car} />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CarsList;
