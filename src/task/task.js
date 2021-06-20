import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';



const Task = ({ label, done, timeCreate, onDeleted, onToggleDone }) => {

   const whenCreated = formatDistanceToNow(timeCreate, { includeSeconds: true });
   const checkItem = done ? 'checked' : '';
   let doneItem = ['description'];
   if(done) doneItem.push('done')

   return (
      <div >
         <input className="toggle" 
               type="checkbox" 
               onClick={onToggleDone}
               defaultChecked={checkItem}
         />
         <label>
            <span className={doneItem.join(' ')}> {label} </span>   
            <span className="created">created {whenCreated} ago</span>
         </label>
         <button className="icon icon-edit"></button>
         <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
   );
}

Task.propTypes = {
   label: PropTypes.string.isRequired,
   done: PropTypes.bool.isRequired,
   timeCreate: PropTypes.number.isRequired,
   onDeleted: PropTypes.func.isRequired,
   onToggleDone: PropTypes.func.isRequired
}


export default Task;
