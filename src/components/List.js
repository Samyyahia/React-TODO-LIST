import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item'

const TaskList = styled.ul`
  list-style-type: none;
`


export default class List extends Component {

  render() {
    const {
      tasks,
    } = this.props

    return(
      <TaskList>
        {
          tasks.map((task) => {
            return (
              <Item key={task} task={task}/>
            )
          })
        }
      </TaskList>
    )
  }
}
