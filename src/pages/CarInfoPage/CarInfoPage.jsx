import { useEffect, useState } from "react";
import css from "./CarInfoPage.module.css";
import { useDispatch } from "react-redux";
import { getCarById } from "../../redux/operations";
import { useParams } from "react-router-dom";
import BookingForm from "../../components/Form/BookingForm";
import CarDetails from "../../components/CarDetails/CarDetails";

const CarInfoPage = () => {
  const [car, setCar] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchCarById = async () => {
      const carInfo = await dispatch(getCarById(id));
      setCar(carInfo.payload);
    };
    fetchCarById();
  }, [dispatch, id]);

  return (
    car && (
      <div className={css.wrapper}>
        <div>
          <img
            src={car.img}
            alt="carPhoto"
            width={640}
            height={512}
            style={{ borderRadius: "19px" }}
          />
          <BookingForm />
        </div>
        <CarDetails car={car} /> 
      </div>
    )
  );
};

export default CarInfoPage;
