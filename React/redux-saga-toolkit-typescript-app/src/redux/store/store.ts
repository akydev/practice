import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import registerReducer from "../slice/registerSlice";
import { rootSaga } from "../saga/rootSaga";
const sagaMiddlerware = createSagaMiddleware();
const store = configureStore({
  reducer: { register: registerReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddlerware),
});
sagaMiddlerware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export default store;
