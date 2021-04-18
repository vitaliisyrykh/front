import ACTION_TYPES from './actionTypes';

export const createTaskRequest = values => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  values,
});

export const createTaskSuccess = data => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  data,
});

export const createTaskError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTasksError = ({error}) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error },
});

export const deleteTaskRequest = ({ id } = {}) => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: { id },
});

export const deleteTaskSuccess = ({ id } = {}) => (
  console.log(id),
  {
    type: ACTION_TYPES.DELETE_TASK_SUCCESS,
    payload: { id },
  }
);

export const deleteTaskError = ({ error }) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error },
});

export const updateTaskRequest = ( id ,  values ) => (
  {
    type: ACTION_TYPES.UPDATE_TASK_REQUEST,
    payload: { id, values },
  }
);

export const updateTaskSuccess = ({ data }, { id }) => (console.log(data),{
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  payload: { data, id },
});

export const updateTaskError = ({ error }) => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: { error },
});

export const updateComponRender = () => ({
  type: ACTION_TYPES.UPDATE_COMPONENT_RENDER,
});
