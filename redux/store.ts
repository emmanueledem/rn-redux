import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;