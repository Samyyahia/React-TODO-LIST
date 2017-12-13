import React, { Component } from 'react';
import styled from 'styled-components';

const OneItem = styled.li`
color: grey;
text-align:center;
text-decoration: ${(props) => props.done ? 'line-through' : 'none'};
`

export default class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
    };
  }

  onClick = () => {
    this.setState({
      done: !this.state.done,
    })
  }

  render() {
    const {
      task,
    } = this.props

    return(
      <OneItem key={task} done={this.state.done}>
        <input type="checkbox" id="tasks" onClick={this.onClick}/>
        <label for="tasks">{ task }</label>
      </OneItem>
    )
  }
}
