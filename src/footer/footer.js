import React, { Component } from 'react';
import TaskFilter from '../task-filter';

import './footer.css';

export default class Footer extends Component {

   render() {
      const { onToggleActive, onToggleCompleted, todos} = this.props

      const doneCount = todos.filter((el) => !el.done).length;

      return (
         <footer className="footer">
            <span className="todo-count">{doneCount} items left</span>
            <TaskFilter 
               onToggleActive={() => onToggleActive()} 
               onToggleCompleted={() => onToggleCompleted()}
            />
            <button className="clear-completed">Clear completed</button>
         </footer>
      );
   };
};

