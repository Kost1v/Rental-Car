import sprite from "../../assets/icon/sprite.svg";
import css from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  const {
    id,
    description,
    brand,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    engineSize,
    fuelConsumption,
  } = car;
  return (
    <>
      {car !== "Request failed with status code 404" && (
        <div>
          <div className={css.carFirstInfo}>
            <div className={css.boxId}>
              <p className={css.carTitle}>
                {brand} {model}, {year}
              </p>
              <p className={css.carId}>id: {id.slice(0, 8)}</p>
            </div>
            <div className={css.boxLocation}>
              <p className={css.carInfo}>
                {address.split(",").slice(1).join(",")}
              </p>
              <p className={css.carInfo}>
                Mileage: {mileage.toLocaleString("ua-UA")} km
              </p>
            </div>
            <h4 className={css.carPrice}>${rentalPrice}</h4>
            <p className={css.carInfo}>{description}</p>
          </div>
          <div className={css.carDetailsWrapper}>
            <div>
              <p className={css.rental}>Rental Conditions:</p>
              <ul className={css.listInfo}>
                {car !== null &&
                  car.rentalConditions.map((rental) => {
                    return (
                      <li key={rental} className={css.listIcon}>
                        <svg className={css.icon}>
                          <use href={`${sprite}#icon-list`}></use>
                        </svg>
                        {rental}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div>
              <p className={css.rental}>Car Specifications:</p>
              <ul className={css.listInfo}>
                <li className={css.listIcon}>
                  <svg className={css.icon}>
                    <use href={`${sprite}#calendar`}></use>
                  </svg>
                  Year: {year}
                </li>
                <li className={css.listIcon}>
                  <svg className={css.icon}>
                    <use href={`${sprite}#icon-car`}></use>
                  </svg>
                  Type: {type}
                </li>
                <li className={css.listIcon}>
                  <svg className={css.icon}>
                    <use href={`${sprite}#colone`}></use>
                  </svg>
                  Fuel Consumption: {fuelConsumption}
                </li>
                <li className={css.listIcon}>
                  <svg className={css.icon}>
                    <use href={`${sprite}#setting`}></use>
                  </svg>
                  Engine Size: {engineSize}
                </li>
              </ul>
            </div>
            <div>
              <p className={css.rental}>Accessories and functionalities:</p>
              <ul className={css.listInfo}>
                {car !== null &&
                  car.accessories.map((acc) => {
                    return (
                      <li key={acc} className={css.listIcon}>
                        <svg className={css.icon}>
                          <use href={`${sprite}#icon-list`}></use>
                        </svg>
                        {acc}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetails;
