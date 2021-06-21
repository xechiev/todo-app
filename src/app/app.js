/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

export default class App extends Component {
  maxId = 1;

  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem('Изучить WebCore'),
        this.createTodoItem('Изучить JSCore'),
        this.createTodoItem('Изучить React&Redux'),
      ],
      itemFilter: 'all',
    };
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((el) => {
        if (el.id === id) {
          el.done = !el.done;
        }
        return el;
      });
      return {
        todoData: newArr,
      };
    });
  };

  onClearCompleted = () => {
    this.setState(({ todoData }) => {
      const clearCompl = todoData.filter((el) => !el.done);
      return {
        todoData: clearCompl,
      };
    });
  };

  onFilterItems(todoData, itemFilter) {
    if (itemFilter === 'all') {
      return todoData;
    }
    if (itemFilter === 'active') {
      return todoData.filter((item) => !item.done);
    }
    if (itemFilter === 'completed') {
      return todoData.filter((item) => item.done);
    }
  }

  addItems = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  onfilterTodos = (value) => {
    this.setState({
      itemFilter: value,
    });
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      timeCreate: Date.now(),
    };
  }

  render() {
    const { todoData, itemFilter } = this.state;
    const todos = this.onFilterItems(todoData, itemFilter);

    return (
      <section className="todoapp">
        <Header />
        <NewTaskForm addItems={this.addItems} />
        <TaskList todos={todos} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
        <Footer
          onClearCompleted={this.onClearCompleted}
          onfilterTodos={this.onfilterTodos}
          todos={todoData}
          itemFilter={itemFilter}
        />
      </section>
    );
  }
}
