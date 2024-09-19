import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const token = Cookies.get("token");

let initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: {},
};
if (token) {
  initialState = {
    isAuthenticated: true,
    isLoading: false,
    user: jwtDecode(token),
  };
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      const token = Cookies.get("token");
      if (token) {
        state.isAuthenticated = token ? true : false;
        state.user = token ? jwtDecode(token) : {};
        state.isLoading = false;
      }
    },
    setLogout: (state) => {
      Cookies.remove("token");
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { setAuth, setLogout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
