export function addTodo(taskName) {
  return {
    type: "ADD",
    taskName
  }
}

export function complete(taskName) {
  return {
    type: "COMPLETE",
    taskName
  }
}

export function undo(taskName) {
  return {
    type: "UNDO",
    taskName
  }
}