import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const handler = {
  [ACTION_TYPES.CREATE_TASK_REQUEST]: produce(({ isFetching }, action) => {
    isFetching = true;
  }),

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce(
    ({ tasks, isFetching }, action) => {
      const {
        data: { task },
      } = action;
      isFetching = false;
      tasks.push(task);
    }
  ),

  [ACTION_TYPES.CREATE_TASK_ERROR]: produce(( draft , action) => {
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
  [ACTION_TYPES.DELETE_TASK_REQUEST]: produce(({ isFetching }, action) => {
    isFetching = true;
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draft,action) => {
      const{payload:{id}}=action;
      draft.isFetching = false;
      draft.tasks = draft.tasks.filter(task => task.id !== id);
    }
  ),
  [ACTION_TYPES.DELETE_TASK_ERROR]:produce(({isFetching,error},{payload:{error:deleteError}})=>{
    isFetching=false;
    error = deleteError;
  })
};

function taskReducer (state = initialState, action) {
  const { type } = action;
  if (handler[type]) {
    console.log(state);
    return handler[type](state, action);
  }
  return state;
}
/* function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const {
        data: { task },
      } = action;
      const { tasks } = state;
      return {
        ...state,
        tasks: [...tasks, task],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { tasks: newTasks },
      } = action;
      console.log(tasks);
      return {
        ...state,
        isFetching: false,
        tasks: [...tasks, ...newTasks],
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { payload:{error} } = action;
      return {
        ...state,
        error,
      };
    }
    case ACTION_TYPES.DELETE_TASK_REQUEST:{
      const {payload:{id}}=action;
      return{
        ...state,
        isFetching:true,
        id
      }
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS:{

    }
    default:
      return state;
  }
} */
export default taskReducer;
