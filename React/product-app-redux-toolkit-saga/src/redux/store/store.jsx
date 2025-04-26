import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import productSlice from "../slice/productSlice";
import addProductSlice from "../slice/addProductSlice";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    product: productSlice,
    addProduct: addProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
