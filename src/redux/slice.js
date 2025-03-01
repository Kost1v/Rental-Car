import { createSlice } from "@reduxjs/toolkit";
import { getBrands, getCarById, getCars } from "./operations";

const INITIAL_STATE = {
  cars: [],
  brands: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 1,
  totalCars: 0,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = [...state.cars, ...action.payload.cars];
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
      })
      .addCase(getCars.rejected, handleRejected)
      .addCase(getCarById.pending, handlePending)
      .addCase(getCarById.fulfilled, (state) => {
        state.loading = false;
        state.cars = [];
      })
      .addCase(getCarById.rejected, handleRejected)
      .addCase(getBrands.pending, handlePending)
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
