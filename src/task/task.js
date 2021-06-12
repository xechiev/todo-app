import React, { Component } from 'react';

import './task.css';



export default class Task extends Component {

   render() {
      
      const { label, onDeleted, onToggleDone, done, view} = this.props;

      let className = 'description';
      let classActive

      if (done) { className += ' done' }
      if (view) {classActive += ' active'}
      
      return (
         <div className={classActive}>
            <input className="toggle" 
                   type="checkbox" 
                   onClick={onToggleDone}/>
            <label>
               <span className={className}> 
                  {label} 
               </span>
               <span className="created">created 5 minute ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
         </div>
      );
   };
};

