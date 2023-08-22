import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";
const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
export const getData = createAsyncThunk("data/getData", () => {
  return fetch(MOVIE_API)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const initialState = {
  movies: [],
  genres: [],
  isLoading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default dataSlice.reducer;
