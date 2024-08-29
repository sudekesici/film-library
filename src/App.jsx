import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/moviesSlice";
import Sidebar from "./components/SideBar";

function App() {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return <>
   <Sidebar></Sidebar>
  </>;
}

export default App;
