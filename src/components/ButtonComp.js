import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../styles/ButtonComp.css";

export default class ButtonComp extends Component {
  render() {
    return (
      <Button className={`${this.props.className} button`} bsStyle="primary">
        {this.props.buttonName}
      </Button>
    );
  }
}