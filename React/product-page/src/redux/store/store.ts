import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const middlewareSaga = createSagaMiddleware();
const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareSaga),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
