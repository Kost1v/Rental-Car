import { useEffect, useState } from "react";
import css from "./CatalogPage.module.css";
import { getBrands, getCars } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
// import { useSearchParams } from "react-router-dom";
import {
  selectBrands,
  selectCars,
  selectTotalPages,
} from "../../redux/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);

  // const brand = searchParams.get("brand") || "";
  // const rentalPrice = searchParams.get("rentalPrice") || "";
  // const minMileage = searchParams.get("minMileage") || "";
  // const maxMileage = searchParams.get("maxMileage") || "";
  // const currentPage = searchParams.get("page") || page;
  // const limit = searchParams.get("limit") || "";

  // const updateFilters = (key, value) => {
  //   const newParams = new URLSearchParams(searchParams);
  //   if (value) {
  //     newParams.set(key, value);
  //   } else {
  //     newParams.delete(key);
  //   }
  //   setSearchParams(newParams);
  // };
  const loadMore = () => {
    if (page <= totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch])

  useEffect(() => {

    dispatch(getCars({ page }));
  }, [dispatch, page]);

  return (
    <div className={css.wrapper}>
      <div className={css.searchStyles}>
        <div>
          <p className={css.searchLabel}>Car brand</p>
          <select
            className={css.inputFilter}
            // value={brand}
            // onChange={(e) => updateFilters(`brand`, e.target.value)}
          >
            <option value={""}>Chose a brand</option>
            {carBrands !== null &&
              carBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
          </select>
        </div>
        <div>
          <p className={css.searchLabel}>Price / 1 hour</p>
          <select
            className={css.inputFilter}
            // value={rentalPrice}
            // onChange={(e) => updateFilters(`rentalPrice`, e.target.value)}
          >
            <option value={""}>Chose a price</option>
            {[30, 40, 50, 60, 70, 80].map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
        <div className={css.wrapperMileage}>
          <label className={css.searchLabel}>Car mileage / km</label>
          <div>
            <input
              type="number"
              className={css.inputMileage}
              style={{
                borderRadius: "12px 0 0 12px",
                borderRight: "1px solid #dadde1",
              }}
              // value={minMileage}
              // onChange={(e) => updateFilters("minMileage", e.target.value)}
            />
            <input
              type="number"
              className={css.inputMileage}
              style={{ borderRadius: "0 12px 12px 0" }}
              // value={maxMileage}
              // onChange={(e) => updateFilters("maxMileage", e.target.value)}
            />
          </div>
        </div>
        <button className={css.search}>Search</button>
      </div>
      {cars.length > 0 ? <CarsList /> : "Not Found"}
      {page < totalPages && (
        <button type="button" onClick={loadMore} className={css.loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
