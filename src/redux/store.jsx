import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: usersSlice
  },
});
