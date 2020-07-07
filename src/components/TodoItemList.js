import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="Hello" />
        <TodoItem text="React" />
        <TodoItem text="Javascript" />
      </div>
    )
  }
}

export default TodoItemList;