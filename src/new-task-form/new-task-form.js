import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default function NewTaskForm({ addItems }) {
  const [label, setLabel] = useState('');

  const onLableChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (label.trim()) {
      addItems(label);
      setLabel('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" className="new-todo" placeholder="What needs to be done?" value={label} onChange={onLableChange} />
    </form>
  );
}

NewTaskForm.propTypes = {
  addItems: PropTypes.func.isRequired,
};
