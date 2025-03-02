import { useEffect, useState } from "react";
import css from "./CatalogPage.module.css";
import { getBrands, getCars, getCarsByFilter } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import {
  selectBrands,
  selectCars,
  selectTotalFiltersCars,
  selectLoading,
  selectTotalPages,
} from "../../redux/selectors";
import { Field, Formik, Form } from "formik";
import Loader from "../../components/Loader/Loader";

const INITIAL_VALUES = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};
const CatalogPage = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const filtersCars = useSelector(selectTotalFiltersCars);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectLoading);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(false);
  const [filters, setFilters] = useState(INITIAL_VALUES);

  const onSubmit = (data, actions) => {
    
    setFilters(data);
    setSearch(true);
    setPage(1);
    actions.reset();
  };

  const loadMore = () => {
    if (page <= totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    if (carBrands.length == 0) {
      dispatch(getBrands());
    }
  }, [dispatch, carBrands]);

  useEffect(() => {
    if (!search) {
      setTimeout(() => {
        dispatch(getCars({ page }));
      }, 100);
    }
  }, [dispatch, page, search]);

  useEffect(() => {
    if (search) {
      dispatch(getCarsByFilter({ ...filters, page }));
    }
  }, [dispatch, filters, page, search]);

  return (
    <div className={css.wrapper}>
      <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
        <Form className={css.searchStyles}>
          <div>
            <p className={css.searchLabel}>Car brand</p>
            <Field className={css.inputFilter} as="select" name="brand">
              <option value={""}>Chose a brand</option>
              {carBrands !== null &&
                carBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </Field>
          </div>
          <div>
            <p className={css.searchLabel}>Price / 1 hour</p>
            <Field className={css.inputFilter} as="select" name="rentalPrice">
              <option value={""}>Chose a price</option>
              {[30, 40, 50, 60, 70, 80].map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </div>
          <div className={css.wrapperMileage}>
            <label className={css.searchLabel}>Car mileage / km</label>
            <div>
              <Field
                type="number"
                name="minMileage"
                className={css.inputMileage}
                style={{
                  borderRadius: "12px 0 0 12px",
                  borderRight: "1px solid #dadde1",
                }}
              />
              <Field
                type="number"
                name="maxMileage"
                className={css.inputMileage}
                style={{ borderRadius: "0 12px 12px 0" }}
              />
            </div>
          </div>
          <button className={css.search}>Search</button>
        </Form>
      </Formik>
      {cars?.length > 0 || filtersCars?.length > 0 ? (
        <CarsList />
      ) : (
        "A car with these specifications was not found"
      )}
      {isLoading && <Loader />}
      {page < totalPages && (
        <button type="button" onClick={loadMore} className={css.loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
