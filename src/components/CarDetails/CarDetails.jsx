// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getCarById } from "../../redux/operations";
import sprite from "../../assets/icon/sprite.svg";
import css from "./CarDetails.module.css";

const CarDetails = ({car}) => {
  // const [car, setCar] = useState(null);
  // const dispatch = useDispatch();
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchCarById = async () => {
  //     const carInfo = await dispatch(getCarById(id));
  //     console.log(carInfo.payload);
      
  //     setCar(carInfo.payload);
  //   };
  //   fetchCarById();
  // }, [dispatch, id]);
  return (
    <div>
      <div className={css.carFirstInfo}>
        <div className={css.boxId}>
          <p className={css.carTitle}>
            {car.brand} {car.model}, {car.year}
          </p>
          <p className={css.carId}>id: {car.mileage}</p>
        </div>
        <div className={css.boxLocation}>
          <p className={css.carInfo}>{car.address}</p>
          <p className={css.carInfo}>Mileage: {car.mileage} km</p>
        </div>
        <h4 className={css.carPrice}>${car.rentalPrice}</h4>
        <p className={css.carInfo}>{car.description}</p>
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
              Year: {car.year}
            </li>
            <li className={css.listIcon}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-car`}></use>
              </svg>
              Type: {car.type}
            </li>
            <li className={css.listIcon}>
              <svg className={css.icon}>
                <use href={`${sprite}#colone`}></use>
              </svg>
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li className={css.listIcon}>
              <svg className={css.icon}>
                <use href={`${sprite}#setting`}></use>
              </svg>
              Engine Size: {car.engineSize}
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
  );
};

export default CarDetails;
