import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./Slices/watchlist";

export const store = configureStore({
  reducer: {
    watchList: watchListSlice,
  },
});
