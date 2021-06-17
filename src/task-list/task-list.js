import React from 'react';
import Task from '../task';
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

export default TaskList;