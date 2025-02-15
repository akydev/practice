import { call, put, takeEvery } from "redux-saga/effects";
import userListService from "../service/userListService";
import { IUsersList } from "../type/IusersList";
import { UsersError, UsersRequest, UsersSuccess } from "../slice/userListSlice";

function* usersSaga() {
  try {
    const res: IUsersList[] = yield call(userListService);
    yield put(UsersSuccess(res));
  } catch (error) {
    yield put(UsersError(error));
  }
}

export default function* watcherUsers() {
  yield takeEvery(UsersRequest().type, usersSaga);
}
