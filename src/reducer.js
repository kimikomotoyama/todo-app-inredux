const initialState = {
  tasks: [
    { taskName: "clean room", isComplete: false }
  ],
  test: "test"
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, tasks: [...state.tasks, { taskName: action.taskName, isComplete: false }] };
    }
    case "COMPLETE": {
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
    case "UNDO": {
      const newTaskState = state.tasks.map(task => {
        if (task.taskName === action.taskName) {
          return { taskName: task.taskName, isComplete: false };
        } else {
          return task;
        }
      });
      return { ...state, tasks: newTaskState };
    }
    default: {
      return state;
    }
  }
}
