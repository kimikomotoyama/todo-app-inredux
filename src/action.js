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
