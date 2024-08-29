import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import SideBar from "../components/SideBar";

const BASE_URL = "http://localhost:3005";

export const fetchMovies = createAsyncThunk(
  "Fetch/Movies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL + "/movies");
      const movies = response.data;
      return movies;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const categoryfilterfunction = ({ movies }) => {
  switch (movies.category) {
    case "comedy":
       <SideBar>
         <div className="comdey-card" style={{ backgroundColor: 'blue', width:'90px', height:'100px'}}> 
          <div className="title">Comedy</div>
        { movies.map((a) => <Link key={a.id} a={a}></Link>)}
        </div>;
       </SideBar>
 
    case "action":
      <h1>{movies.title}</h1>;
      movies.map((a) => <SideBar key={a.id} a={a}></SideBar>);

    case "animation":
      <h1>{movies.title}</h1>;
      movies.map((a) => <SideBar key={a.id} a={a}></SideBar>);

    case "horror":
      <h1>{movies.title}</h1>;
      movies.map((a) => <SideBar key={a.id} a={a}></SideBar>);

    case "crime":
      <h1>{movies.title}</h1>;
      movies.map((a) => <SideBar key={a.id} a={a}></SideBar>);

    case "science":
      <h1>{movies.title}</h1>;
      movies.map((a) => <SideBar key={a.id} a={a}></SideBar>);
  }
};

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succedded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {} = moviesSlice.actions;
export default moviesSlice.reducer;
