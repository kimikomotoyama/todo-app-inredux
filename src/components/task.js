import React, { Component } from "react";
import { ListGroupItem } from "react-bootstrap";
import ButtonComp from "./ButtonComp";

export default class Task extends Component {
  render() {
    console.log(this.props);
    return (
      <ListGroupItem>
        {this.props.task.taskName}
        <ButtonComp buttonName={this.props.task.isCompleted ? "Undo" : "Complete"}/>
      </ListGroupItem>
    );
  }
}
