import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./hackerNewsSlice";

const store = configureStore({
  reducer: {
    hackerNews: hackerNewsReducer,
  },
});

// Export the store
export default store;

// TypeScript types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
