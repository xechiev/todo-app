import React, { Component } from 'react';
import TaskFilter from '../task-filter';

import './footer.css';

export default class Footer extends Component {

   render() {
      const { todos, onClearCompleted, onfilterTodos } = this.props

      const doneCount = todos.filter((el) => !el.done).length;

      return (
         <footer className="footer">
            <span className="todo-count">{doneCount} items left</span>
            <TaskFilter 
               onfilterTodos={onfilterTodos}
            />
            <button 
               className="clear-completed"
               onClick={onClearCompleted}>
               Clear completed
            </button>
         </footer>
      );
   };
};

