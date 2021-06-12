import React, { Component } from 'react';
import './task-filter.css';

export default class TaskFilter extends Component{
   
   render() {

      const { onToggleActive, onToggleCompleted, onToggleAll } = this.props;

      return (
         <ul className="filters">
            <li><button type="checkbox" onClick={onToggleAll}>All</button></li>
            <li><button onClick={onToggleActive}>Active</button></li>
            <li><button onClick={onToggleCompleted}>Completed</button></li>
         </ul>
      );
   }; 
};
