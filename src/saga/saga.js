import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
const getPostData = async () => {
  const res = await fetch("/api/todoList");

  return await res.json();
};
const fetchAddTodo = async (payload) => {
  const res = await fetch("/api/todoList", {
    method: "post",
    body: JSON.stringify(payload),
  });

  return await res.json();
};
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const todo = yield call(getPostData);

    yield put({ type: "USER_FETCH_SUCCEEDED", todo: todo });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* addTodo(action) {
  try {
    const todo = yield call(fetchAddTodo, action.payload);

    yield put({ type: "ADD_TODO_SUCCEEDED", todo: todo });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  yield takeLatest("ADD_TODO_REQUESTED", addTodo);
}
