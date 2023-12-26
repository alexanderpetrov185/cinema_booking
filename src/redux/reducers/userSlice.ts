import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

interface UserState {
  user: IUser | null;
  isLoading: boolean;
  token: string | null;
  isLoggedIn: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  token: null,
  isLoggedIn: false,
  error: "",
};

//reducer(slice)
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authSending(state) {
      state.isLoading = true;
    },
    authSendingSuccess(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    authSendingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess(state) {
      state.isLoggedIn = false;
    },
  },
});

export default userSlice.reducer;
