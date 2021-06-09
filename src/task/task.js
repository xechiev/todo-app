import React, { Component } from 'react';

//import TaskFilter from '../task-filter';
//import { format } from 'date-fns'
import './task.css';



export default class Task extends Component {

   state = {
      done: false
   };

   onLabeleClick = () => {
      this.setState(({done}) => {
         return {
            done: !done
         }
      })
   };
   
    render() {
      const { label, onDeleted } = this.props;
      const { done } = this.state;

      let classNames = 'description"';
      if (done) {
         classNames += ' done';
      }
      
      return (
         <div className='view'>
            <input className="toggle" type="checkbox" />
            <label>
               <span className={classNames}
                     onClick={ this.onLabeleClick }> 
                     { label } 
               </span>
               <span className="created">created 5 minute ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={ onDeleted }></button>
         </div>
      );
   };
};
