import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching:false
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
        
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const {
        state: { tasks },
      } = state;
      const {
        payload:{tasks:newTasks},
      } = action;
      console.log(tasks)
      return {
        ...state,
        isFetching: false,
        tasks: [...tasks, ...newTasks],
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
}
export default taskReducer;
