import React from 'react';
import PropTypes from 'prop-types';

import './task-filter.css';
 const TaskFilter = ({ Itemfilter, onfilterTodos }) => {

   const allItem = Itemfilter === "all" ? "selected" : "";
   const activeItem = Itemfilter === "active" ? "selected" : "";
   const completedItem = Itemfilter === "completed" ? "selected" : "";

   const onFilter = (e) => {
      const innerText = e.target.innerText.toLowerCase();
      onfilterTodos(innerText);
   }

   return (
      <ul className="filters">
         <li><button className={allItem} onClick={onFilter}>All</button></li>
         <li><button className={activeItem} onClick={onFilter}>Active</button></li>
         <li><button className={completedItem} onClick={onFilter}>Completed</button></li>
      </ul>
   );
};

TaskFilter.defaultProps = {
   Itemfilter: 'all'
}

TaskFilter.propTypes = {
   Itemfilter: PropTypes.oneOf(["all", "active", "completed"]),
   onfilterTodos: PropTypes.func.isRequired
}

export default TaskFilter;