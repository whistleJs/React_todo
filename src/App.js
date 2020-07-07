import React, { Component } from 'react';

import Form from './components/Form';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList />
      </TodoListTemplate>
    )
  }
}

export default App;
