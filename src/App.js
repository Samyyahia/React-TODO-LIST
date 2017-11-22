import React, { Component } from 'react';
import Title from './components/Title';
import AddTaskField from './components/AddTaskField';
import List from './components/List';

class App extends Component {

  render() {
    let taskList = ['Acheter du pain', 'Faire la vaisselle', 'Apprendre React'];

    return  (
      <div>
        <Title>React TODO List</Title>
        <AddTaskField label="Ajouter une tâche" />
        <List tasks={taskList} />
      </div>
    );
  }
}

export default App;
