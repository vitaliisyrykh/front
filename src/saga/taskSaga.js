import { put } from 'redux-saga/effects';
import * as TaskActionCreate from '../actions/createActionTask';
import * as API from '../API';

export function * createdTask (action) {
  try {
    const {
      data: {
        data: [task],
      },
    } = yield API.createTask(action.values);

    yield put(TaskActionCreate.createTaskSuccess(task));
  } catch (err) {
    yield put(TaskActionCreate.createTaskError(err));
  }
}

export function * getTasks (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action);
    console.log(tasks);
    yield put(TaskActionCreate.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(TaskActionCreate.getTasksError(error));
  }
}
