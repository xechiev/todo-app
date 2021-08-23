/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
// import useInterval from '../useInterval';

import './task.css';

const Task = ({ label, done, timeCreate, onDeleted, onToggleDone, sec }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [counter, setCounter] = useState(sec);
  // const [seconds, setSeconds] = useState(sec % 60);
  // const [minutes, setMinutes] = useState(Math.floor(sec / 60))

  function addZero(x) {
    return x < 10 ? '0' + x : x
  }

  const formatTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${addZero(minutes)}:${addZero(seconds)}`;
  }

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      if (counter > 0) {
        interval = setTimeout(() => setCounter(prevState => prevState - 1), 1000);
      } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
    }
  }, [counter, isPlaying])

  const whenCreated = formatDistanceToNow(timeCreate, {
    includeSeconds: true,
  });

  const checkItem = done ? 'checked' : '';
  const doneItem = ['description'];
  if (done) doneItem.push('done');

  return (
    <div>
      <input className="toggle" type="checkbox" onClick={onToggleDone} defaultChecked={checkItem} />
      <label>
        <span className={doneItem.join(' ')}>{label}</span>
        <button className="icon icon-play" type="button" onClick={() => setPlaying(true)} />
        <button className="icon icon-pause" type="button" onClick={() => setPlaying(false)} />
        <p className="timer">
          {counter === 0 ? 'end' : formatTimer(counter)}
        </p>
        <span className="created">
          created
          {' '}
          {whenCreated}
          {' '}
          ago
        </span>
      </label>
      <button type="button" className="icon icon-edit" />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
};

Task.defaultProps = {
  sec: 0,
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  timeCreate: PropTypes.number.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  sec: PropTypes.number,
};

export default Task;
