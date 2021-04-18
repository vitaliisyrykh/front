import { put } from 'redux-saga/effects';
import * as TaskActionCreate from '../actions/createActionTask';
import * as API from '../API';

export function * createdTaskSaga (action) {
  try {
    const {
      data: {
        data: [task],
      },
    } = yield API.createTask(action.values);

    yield put(TaskActionCreate.createTaskSuccess({ task }));
  } catch (error) {
    yield put(TaskActionCreate.createTaskError({ error }));
  }
}

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action);
    console.log(tasks);
    yield put(TaskActionCreate.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(TaskActionCreate.getTasksError({ error }));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const {
      payload: { id },
    } = action;
    const { data: data } = yield API.deleteTask({ id });
    yield put(TaskActionCreate.deleteTaskSuccess({ data }));
  } catch (error) {
    yield put(TaskActionCreate.deleteTaskError({ error }));
  }
}
