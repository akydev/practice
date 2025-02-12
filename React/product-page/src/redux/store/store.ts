import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productReducer from "../slice/productSlice";
import { rootSaga } from "../saga/rootSaga";

const middlewareSaga = createSagaMiddleware();
const store = configureStore({
  reducer: { product: productReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareSaga),
});
middlewareSaga.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
