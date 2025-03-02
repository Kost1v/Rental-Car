import { useEffect, useState } from "react";
import css from "./CarsListItem.module.css";
import sprite from "../../assets/icon/sprite.svg";
import { Link } from "react-router-dom";

const CarsListItem = ({ car }) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;
  const [favorite, setFavorite] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("savedCar")) || [];
    return savedFavorites.includes(id);
  });

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("savedCar")) || [];

    if (favorite) {
      if (favorite && !savedFavorites.includes(id)) {
        const updatedFavorites = [...savedFavorites, id];
        localStorage.setItem("savedCar", JSON.stringify(updatedFavorites));
      }
    } else {
      const updatedFavorites = savedFavorites.filter((name) => name !== id);
      localStorage.setItem("savedCar", JSON.stringify(updatedFavorites));
    }
  }, [favorite, id]);
  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={img} alt="Car photo" className={css.img} />
        <button
          className={css.eye}
          type="button"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? (
            <svg className={css.favourite}>
              <use href={`${sprite}#favourite-on`}></use>
            </svg>
          ) : (
            <svg className={css.favourite}>
              <use href={`${sprite}#favourite-off`}></use>
            </svg>
          )}
        </button>
      </div>
      <div className={css.carInfo}>
        <p>
          {brand} <span style={{ color: "#3470ff" }}>{model}</span>, {year}
        </p>
        <p>${rentalPrice}</p>
      </div>
      <p className={css.moreCarInfo}>
        {address
          .split(",")
          .slice(1)
          .join(" |")}{" "}
        | {rentalCompany} | {type} | {mileage.toLocaleString("ua-UA")}
        km
      </p>
      <Link to={`/catalog/${id}`} className={css.button}>
        Read more
      </Link>
    </>
  );
};

export default CarsListItem;
