import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error:null
};

function taskReducer (state = initialState, action) {
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
}
export default taskReducer;
