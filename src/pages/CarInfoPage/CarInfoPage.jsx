import { useEffect, useState } from "react";
import css from "./CarInfoPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCarById } from "../../redux/operations";
import { useParams } from "react-router-dom";
import BookingForm from "../../components/Form/BookingForm";
import CarDetails from "../../components/CarDetails/CarDetails";
import { selectError, selectLoading } from "../../redux/selectors";

import Loader from "../../components/Loader/Loader";

const CarInfoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const fetchCarById = async () => {
      const carInfo = await dispatch(getCarById(id));
      setCar(carInfo.payload);
    };
    fetchCarById();
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {error && 'Car not found'}
      {car !== null && !error && (
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
      )}
    </>
  );
};

export default CarInfoPage;
