import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
  isUpdate:false
};

const handler = {
  [ACTION_TYPES.CREATE_TASK_REQUEST]: produce(({ isFetching }, action) => {
    isFetching = true;
  }),

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce(
    ({ tasks, isFetching }, action) => {
      const {
        data: { newTask },
      } = action;
      console.log(newTask);
      isFetching = false;
      tasks.push(newTask);
    }
  ),

  [ACTION_TYPES.CREATE_TASK_ERROR]: produce((draft, action) => {
    const { error } = action;
    draft.isFetching = false;
    draft.error = error;
  }),

  [ACTION_TYPES.GET_TASKS_REQUEST]: produce(({ isFetching }, action) => {
    isFetching = true;
  }),

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draft, action) => {
    const {
      payload: { tasks },
    } = action;

    draft.isFetching = false;
    draft.tasks.push(...tasks);
  }),

  [ACTION_TYPES.GET_TASKS_ERROR]: produce(
    ({ error: initialError }, { payload: { error } }) => {
      initialError = error;
    }
  ),
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: produce((draft, action) => {
    draft.isFetching = true;
    
  }),
  [ACTION_TYPES.UPDATE_COMPONENT_RENDER]: produce((draft,action)=>{
    draft.isUpdate = true;
  }),
  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: produce((draft, action) => {
    const {
      payload: { data:updatedTasks, id },
    } = action;
    draft.isFetching = false;
    draft.isUpdate = false;
    draft.tasks.filter(task => task.id !== id).push(...updatedTasks);
  }),
  [ACTION_TYPES.UPDATE_TASK_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;
    draft.error = error;
  }),

  [ACTION_TYPES.DELETE_TASK_REQUEST]: produce(({ isFetching }, action) => {
    isFetching = true;
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draft, action) => {
    const {
      payload: { id },
    } = action;
    console.log(id);
    draft.isFetching = false;
    draft.tasks = draft.tasks.filter(task => task.id !== id);
  }),
  [ACTION_TYPES.DELETE_TASK_ERROR]: produce(
    ({ isFetching, error }, { payload: { error: deleteError } }) => {
      isFetching = false;
      error = deleteError;
    }
  ),
};

function taskReducer (state = initialState, action) {
  const { type } = action;
  if (handler[type]) {
    return handler[type](state, action);
  }
  return state;
}
export default taskReducer;
