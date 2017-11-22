import React, { Component } from 'react';
import styled from 'styled-components';

const Titre = styled.h1`
  font-size: 25px;
  text-align: center;
`;

export default class Title extends Component {

  render(){
    const {
      children,
    } = this.props;

    return <Titre>{ children }</Titre>;
  }
}
