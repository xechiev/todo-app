import React from 'react';
import TaskFilter from '../task-filter';
import PropTypes from 'prop-types';

import './footer.css';

const Footer = ({ todos, itemFilter, onClearCompleted, onfilterTodos}) => {

   const doneCount = todos.filter((el) => !el.done).length;

   return (
      <footer className="footer">
         <span className="todo-count">{doneCount} items left</span>
         <TaskFilter 
               onfilterTodos={onfilterTodos}
               itemFilter={itemFilter}
         />
         <button 
            className="clear-completed"
            onClick={onClearCompleted}>
            Clear completed
         </button>
      </footer>
   );
}

Footer.propTypes = {
   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
   itemFilter: PropTypes.string,
   onClearCompleted: PropTypes.func.isRequired,
   onfilterTodos: PropTypes.func.isRequired,
}

export default Footer;
