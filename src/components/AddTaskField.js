import React, { Component } from 'react';
import styled from 'styled-components';
import List from './List';

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
  constructor(props) {
    super(props);
    this.state = {
        arr: [],
        value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value === '') {
      return false;
    } else {
      var newArray = this.state.arr.slice();
      newArray.push(this.state.value);
      this.setState({arr:newArray, value:''});
    }
  }

  handleAdd(event){
    if (event.charCode == 13) {
      this.handleSubmit(event);
    }
    if (event.keyCode == 13) {
      this.handleSubmit(event);
    }
  }

  render() {
    const {
      label,
    } = this.props;

    return(
      <div>
        <Label>{label}</Label>
        <input type="text"  value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleAdd}/>
        <Button onClick={this.handleSubmit}>Ajoutayyy !</Button>
        <List tasks={this.state.arr} />
      </div>
    );
  }
}
