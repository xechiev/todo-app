/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import React, { useState } from 'react';
import './app.css';

import Header from '../header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

export default function App() {
  const [state, setState] = useState([]);
  const [itemFilter, setItemFilter] = useState('all');

  let maxId = Date.now();

  const createTodoItem = (label, m, s) => ({
    label,
    done: false,
    id: maxId++,
    timeCreate: Date.now(),
    min: +m,
    sec: +s,
  });

  const onToggleDone = (id) => {
    const newArr = state.map((el) => {
      if (el.id === id) {
        el.done = !el.done;
      }
      return el;
    });
    return setState(newArr);
  };

  const onClearCompleted = () => {
    const clearCompl = state.filter((el) => !el.done);
    return setState(clearCompl);
  };

  const onFilterItems = () => {
    if (itemFilter === 'all') {
      return state;
    }
    if (itemFilter === 'active') {
      return state.filter((item) => !item.done);
    }
    if (itemFilter === 'completed') {
      return state.filter((item) => item.done);
    }
  };

  const addItems = (text, m, s) => {
    const newItem = createTodoItem(text, m, s);
    setState([...state, newItem]);
  };

  const deleteItem = (id) => {
    const idx = state.findIndex((el) => el.id === id);
    setState([...state.slice(0, idx), ...state.slice(idx + 1)]);
  };

  const onfilterTodos = (value) => {
    setItemFilter(value);
  };

  const todos = onFilterItems(state, itemFilter);

  return (
    <section className="todoapp">
      <Header />
      <NewTaskForm 
        addItems={addItems} 
      />
      <TaskList 
        todos={todos} 
        onDeleted={deleteItem} 
        onToggleDone={onToggleDone} 
      />
      <Footer
        onClearCompleted={onClearCompleted}
        onfilterTodos={onfilterTodos}
        todos={state}
        itemFilter={itemFilter}
      />
    </section>
  );
}
