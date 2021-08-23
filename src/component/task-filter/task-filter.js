import React from 'react';
import PropTypes from 'prop-types';

import './task-filter.css';

const TaskFilter = ({ itemFilter, onfilterTodos }) => {
  const allItem = itemFilter === 'all' ? 'selected' : '';
  const activeItem = itemFilter === 'active' ? 'selected' : '';
  const completedItem = itemFilter === 'completed' ? 'selected' : '';

  const onFilter = (e) => {
    const innerText = e.target.innerText.toLowerCase();
    onfilterTodos(innerText);
  };

  return (
    <ul className="filters">
      <li>
        <button type="button" className={allItem} onClick={onFilter}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={activeItem} onClick={onFilter}>
          Active
        </button>
      </li>
      <li>
        <button type="button" className={completedItem} onClick={onFilter}>
          Completed
        </button>
      </li>
    </ul>
  );
};

TaskFilter.defaultProps = {
  itemFilter: 'all',
};

TaskFilter.propTypes = {
  itemFilter: PropTypes.oneOf(['all', 'active', 'completed']),
  onfilterTodos: PropTypes.func.isRequired,
};

export default TaskFilter;
