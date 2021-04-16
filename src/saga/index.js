import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createdTask, getTasks } from './taskSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createdTask);
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasks);
}

export default rootSaga;
