import React from 'react';
import Task from '../task';
import './task-list.css';

const TaskList = ( {todos, onDeleted, onToggleDone} ) => {

   const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
         <li key={id} > 
            <Task  
               {... itemProps }
               onDeleted={() => onDeleted(id)}
               onToggleDone={() => onToggleDone(id)}
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

export default TaskList;