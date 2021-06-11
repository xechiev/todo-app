import React, { Component } from 'react';
import TaskFilter from '../task-filter';

import './footer.css';

export default class Footer extends Component {

   render() {
      // const { activeView } = this.props
      return (
         <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TaskFilter />
            <button className="clear-completed">Clear completed</button>
         </footer>
      );
   };
};

