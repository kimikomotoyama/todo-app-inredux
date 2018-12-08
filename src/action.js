import * as Constants from "./constants";

export function addTodo(taskName) {
  return {
    type: Constants.ADD,
    taskName
  }
}

export function complete(taskName) {
  return {
    type: Constants.COMPLETE,
    taskName
  }
}

export function undo(taskName) {
  return {
    type: Constants.UNDO,
    taskName
  }
}

export function showAll() {
  return {
    type: Constants.SHOW_ALL,
    showStatus: Constants.SHOW_ALL
  };
}

export function showCompleted() {
  return {
    type: Constants.SHOW_COMPLETED,
    showStatus: Constants.SHOW_COMPLETED
  };
}

export function showIncomplete() {
  return {
    type: Constants.SHOW_INCOMPLETE,
    showStatus: Constants.SHOW_INCOMPLETE
  };
}