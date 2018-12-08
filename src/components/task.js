import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroupItem } from "react-bootstrap";
import { addTodo, complete, undo } from "../action";
import ButtonComp from "./ButtonComp";

export class Task extends Component {
  render() {
    console.log("render in task")
    console.log(this.props.task.isComplete)
    return (
      <ListGroupItem>
        {this.props.task.taskName}
        <ButtonComp buttonName={this.props.task.isComplete ? "Undo" : "Complete"}
          onClick={() => this.props.task.isComplete ? this.props.undo(this.props.task.taskName) : this.props.complete(this.props.task.taskName)} />
      </ListGroupItem>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    complete: (taskName) => {
      dispatch(complete(taskName))
    },
    undo: (taskName) => {
      dispatch(undo(taskName))
    }
  };
}

const ConnectTask = connect(mapStateToProps, mapDispatchToProps)(Task);

export default ConnectTask;