/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
// import useInterval from '../useInterval';

import './task.css';

const Task = ({ label, done, timeCreate, onDeleted, onToggleDone, min, sec }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);

  function addZero(x) {
    return x < 10 ? '0' + x : x
  }

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0 || minutes === undefined) {
              clearInterval(interval)
          } else {
              setMinutes(minutes - 1);
              setSeconds(59);
          }
        } 
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  })

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
          {addZero(minutes)}
          :
          {addZero(seconds)}
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
  min: 20,
  sec: 0,
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  timeCreate: PropTypes.number.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  min: PropTypes.number,
  sec: PropTypes.number,
};

export default Task;
