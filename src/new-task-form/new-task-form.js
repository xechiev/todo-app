import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default function NewTaskForm({ addItems }) {
  const [label, setLabel] = useState('');
  const [mint, setMint] = useState('');
  const [secd, setSecd] = useState('');

  const onLableChange = (e) => {
    setLabel(e.target.value);
  };

  const onMinChange = (e) => {
    if (e.target.value > 999) {
      e.target.value = 999
    }
    setMint(e.target.value)
  }

  const onSecChange = (e) => {
    if (e.target.value > 59) {
      e.target.value = 59
    }
    setSecd(e.target.value)
  }

  const onSubmit = () => {    
    if (label.trim()) {
      addItems(label, mint, secd);
      setLabel('');
      setMint('');
      setSecd(''); 
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  }

  return (
    <div className="new-todo-form">
      <form>
        <input type="text" className="new-todo" placeholder="Task" value={label} onChange={onLableChange} onKeyDown={(e) => onKeyDown(e)} />    
        <input 
          type="text" 
          className="new-todo-form__timer" 
          title="Используйте числовой формат"
          placeholder="Min" 
          value={mint.replace(/[^\d]/g, '')} 
          onChange={onMinChange} 
          onKeyDown={(e) => onKeyDown(e)}
        />
        <input 
          type="text" 
          className="new-todo-form__timer" 
          title="Используйте числовой формат"
          placeholder="Sec" 
          value={secd.replace(/[^\d]/g, '')} 
          onChange={onSecChange} 
          onKeyDown={(e) => onKeyDown(e)}
        />
      </form>
    </div>
  );
}

NewTaskForm.propTypes = {
  addItems: PropTypes.func.isRequired,
};
