import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      const { value } = action;
      return {
        ...state,
        task: [state.task, { ...value }],
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
  }
}
export default taskReducer;
