import React from 'react';
import Task from '../task';
import PropTypes from 'prop-types';

import './task-list.css';

const TaskList = ( {todos, onDeleted, onToggleDone} ) => {


   const elements = todos.map((item) => {

      const { id, ...itemProps } = item;
         return (
         <li key={id} > 
            <Task  
               onDeleted={() => onDeleted(id)}
               onToggleDone={() => onToggleDone(id)}
               {... itemProps }
            />
         </li>
      );
   })

   return (
      <ul className='todo-list'>
         { elements }
      </ul>
   )
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TaskList;