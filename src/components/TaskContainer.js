import React, { Component } from "react";
import { connect } from 'react-redux';
import { ListGroup } from "react-bootstrap";
import { addTodo, complete, showAll, showCompleted, showIncomplete } from "../action";
import Task from "./Task";
import "../styles/TaskContainer.css";
import ButtonComp from "./ButtonComp";

class TaskContainer extends Component {
  render() {
    return (
      <div className="task-container">
        <h1>Todo app</h1>
        <form onSubmit={e => {
          e.preventDefault();
          this.props.addToDo(e.target.querySelector('input').value)
        }}>
          <input placeholder="Add task" />
          <input type="submit" value="Add Task" />
        </form>
        <ButtonComp className="add-task-button" buttonName="Show All" onClick={this.props.showAll} />
        <ButtonComp className="add-task-button" buttonName="Show Completed" onClick={this.props.showCompleted} />
        <ButtonComp className="add-task-button" buttonName="Show Incomplete" onClick={this.props.showIncomplete} />
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
    },
    showAll: () => {
      dispatch(showAll())
    },
    showCompleted: () => {
      dispatch(showCompleted())
    },
    showIncomplete: () => {
      dispatch(showIncomplete())
    }
  }
}

const task = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer)

export default task;