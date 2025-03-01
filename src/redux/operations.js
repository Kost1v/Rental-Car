import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const getCars = createAsyncThunk(
  "cars/getAll",
  async (
    {page} /*brand, rentalPrice, minMileage, maxMileage, limit = 12, page = 1 */,
    thunkApi
  ) => {
    try {
      // const params = new URLSearchParams();
      // if (brand) params.append("brand", brand);
      // if (rentalPrice) params.append("rentalPrice", rentalPrice);
      // if (minMileage) params.append("minMileage", minMileage);
      // if (maxMileage) params.append("maxMileage", maxMileage);
      // if (limit) params.append("limit", limit);
      // if (page) params.append("page", page);
      const { data } = await carInstance.get(`/cars?page=${page}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getCarById = createAsyncThunk(
  "cars/getCar",
  async (id, thunkApi) => {
    try {
      const { data } = await carInstance.get(`/cars/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getBrands = createAsyncThunk(
  "cars/brands",
  async (_, thunkApi) => {
    try {
      const { data } = await carInstance.get("/brands");
      
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
