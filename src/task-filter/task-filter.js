import React from 'react';
import './task-filter.css';

 const TaskFilter = ({ onfilterTodos }) => {
   
   const onFilter = (e) => {
      const innerText = e.target.innerText.toLowerCase();
      onfilterTodos(innerText);
   }
   return (
      <ul className="filters">
         <li><button  onClick={onFilter}>All</button></li>
         <li><button  onClick={onFilter}>Active</button></li>
         <li><button  onClick={onFilter}>Completed</button></li>
      </ul>
   );
};

export default TaskFilter;