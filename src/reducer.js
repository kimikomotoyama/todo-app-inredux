import * as Constants from "./constants";

const initialState = {
  tasks: [
    { taskName: "clean room", isComplete: false }
  ],
  showStatus: Constants.SHOW_ALL
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.ADD: {
      return { ...state, tasks: [...state.tasks, { taskName: action.taskName, isComplete: false }] };
    }
    case Constants.COMPLETE: {
      console.log(state)
      const newTaskState = state.tasks.map(task => {
        console.log(task)
        console.log(action)
        if (task.taskName === action.taskName) {
          return { taskName: task.taskName, isComplete: true }
        } else {
          return task;
        }
      });
      return { ...state, tasks: newTaskState };
    }
    case Constants.UNDO: {
      const newTaskState = state.tasks.map(task => {
        if (task.taskName === action.taskName) {
          return { taskName: task.taskName, isComplete: false };
        } else {
          return task;
        }
      });
      return { ...state, tasks: newTaskState };
    }
    case Constants.SHOW_ALL: {
      return { ...state, showStatus: Constants.SHOW_ALL };
    }
    case Constants.SHOW_COMPLETED: {
      return { ...state, showStatus: Constants.SHOW_COMPLETED };
    }
    case Constants.SHOW_INCOMPLETE: {
      return { ...state, showStatus: Constants.SHOW_INCOMPLETE };
    }
    default: {
      return state;
    }
  }
}
