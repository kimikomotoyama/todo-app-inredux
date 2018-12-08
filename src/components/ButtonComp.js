import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../styles/ButtonComp.css";

export default class ButtonComp extends Component {
  render() {
    return (
      <Button className={`${this.props.class} button`} bsStyle={this.props.buttonType} onClick={this.props.onClick}>
        {this.props.buttonName}
      </Button>
    );
  }
}