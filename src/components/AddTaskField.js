import React, { Component } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: grey;
  margin: 5px;
  font-weight: bold;
`

const Button = styled.button`
  background-color: light-blue;
  margin: 10px;
  color: orange;
`

export default class AddTaskField extends Component {

  render() {
    const {
      label,
      onClick,
    } = this.props;

    return(
      <div>
        <Label>{label}</Label>
        <input type="text"/>
        <Button onClick={onClick}>Ajoutayyy !</Button>
      </div>
    );
  }
}
