import React, { Component } from 'react';
import TaskFilter from '../task-filter';
import PropTypes from 'prop-types';

import './footer.css';

export default class Footer extends Component {

   static propTypes = {
      todos: PropTypes.arrayOf(PropTypes.object).isRequired,
      Itemfilter: PropTypes.arrayOf(PropTypes.object),
      onClearCompleted: PropTypes.func.isRequired,
      onfilterTodos: PropTypes.func.isRequired,
   }

   render() {
      const { todos, Itemfilter, onClearCompleted, onfilterTodos} = this.props

      const doneCount = todos.filter((el) => !el.done).length;

      return (
         <footer className="footer">
            <span className="todo-count">{doneCount} items left</span>
            <TaskFilter 
               onfilterTodos={onfilterTodos}
               Itemfilter={Itemfilter}
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

