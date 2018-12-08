import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, complete } from "../action";

class Task extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.tasks.map((task, index) => {
          return <div key={index}>{task.taskName}</div>
        }
        )
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.tasks)
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: taskName => {
      dispatch(addTodo(taskName))
    },
    complete: taskName => {
      dispatch(complete(taskName))
    }
  }
} 

const task = connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

export default task;