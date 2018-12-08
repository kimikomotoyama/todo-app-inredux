const initialState = {
  tasks: [
    {taskName: "clean room", isCompleted: false}
  ]
}

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD":{
      const newState = {...state};
      newState.tasks.push({taskName: action.taskName, isCompleted: false});
      return newState;
    }
    case "COMPLETE":{
      const newState = {...state};
      for (let i = 0; i < newState.tasks.length; i++) {
        if (newState.tasks[i].taskName === action.taskName) {
          newState.tasks[i].isCompleted = true;
        }
      }
      return newState;
    }
    default:{
      return state;
    }
  }
}
