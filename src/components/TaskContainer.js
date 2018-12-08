import React, { Component } from "react";
import { connect } from 'react-redux';
import { ListGroup } from "react-bootstrap";
import { addTodo, complete } from "../action";
import Task from "./Task";
import "../styles/TaskContainer.css";
import ButtonComp from "./ButtonComp";

class TaskContainer extends Component {
  render() {
    return (
      <div className="task-container">
        <h1>Todo app</h1>
        <ButtonComp className="add-task-button" buttonName="Add Task" buttonType="primary" />
        <ButtonComp className="add-task-button" buttonName="Show All" />
        <ButtonComp className="add-task-button" buttonName="Show Completed" />
        <ButtonComp className="add-task-button" buttonName="Show Incompleted" />
        <ListGroup>
          {this.props.tasks && this.props.tasks.map((task, index) => {
            return <Task key={index} task={task} />
          })}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
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
)(TaskContainer)

export default task;