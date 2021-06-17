import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';



export default class Task extends Component {
    
   render() {
      
      const { label, done, timeCreate, onDeleted, onToggleDone} = this.props;

      const whenCreated = formatDistanceToNow(timeCreate, { includeSeconds: true });

      let className = 'description';
      
      if (done) { className += ' done' };
        
      return (
         <div >
            <input className="toggle" 
                   type="checkbox" 
                   onClick={onToggleDone}
            />
            <label>
               <span className={className}> {label} </span>   
               <span className="created">created {whenCreated} ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
         </div>
      );
   };
};

