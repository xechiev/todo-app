import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../task-filter';

import './footer.css';

const Footer = ({ todos, itemFilter, onClearCompleted, onfilterTodos }) => {
  const doneCount = todos.filter((el) => !el.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {doneCount}
        {' '}
        items left
      </span>
      <TaskFilter onfilterTodos={onfilterTodos} itemFilter={itemFilter} />
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemFilter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onfilterTodos: PropTypes.func.isRequired,
};

export default Footer;
