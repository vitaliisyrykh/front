import { put } from 'redux-saga/effects';
import * as TaskActionCreate from '../actions/createActionTask';
import * as API from '../API';

export function * createdTaskSaga (action) {
  try {
    const {
      data: { data: newTask },
    } = yield API.createTask(action.values);
    console.log(newTask);
    yield put(TaskActionCreate.createTaskSuccess({ newTask }));
  } catch (error) {
    yield put(TaskActionCreate.createTaskError({ error }));
  }
}

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action);

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
    yield put(TaskActionCreate.deleteTaskSuccess({ id }));
  } catch (error) {
    yield put(TaskActionCreate.deleteTaskError({ error }));
  }
}

export function * updateTaskSaga (action) {
  try {
    const {
      payload: { id, values },
    } = action;
    const {
      data : {data}
    } = yield API.updateTask({ id }, { values });
   
    yield put(TaskActionCreate.updateTaskSuccess( { data } , { id }));
  } catch (error) {
    yield put(TaskActionCreate.updateTaskError(error));
  }
}
