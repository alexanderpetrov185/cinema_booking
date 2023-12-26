import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../models/IMovie";

interface MovieState {
  data: IMovie[] | null;
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  data: null,
  isLoading: false,
  error: "",
};

//reducer(slice)
export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    sendingFetchMovies(state) {
      state.isLoading = true;
    },
    fetchMoviesSuccess(state, action: PayloadAction<IMovie[]>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchMoviesError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default moviesSlice.reducer;
