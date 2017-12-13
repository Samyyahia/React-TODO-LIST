import React, { Component } from 'react';
import Title from './components/Title';
import AddTaskField from './components/AddTaskField';

class App extends Component {

  render() {

    return  (
      <div>
        <Title>React TODO List</Title>
        <AddTaskField label="Ajouter une tâche"/>
      </div>
    );
  }
}

export default App;
