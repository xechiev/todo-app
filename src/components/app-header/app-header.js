import React from 'react';
import './app-header.css';

const AppHeader = () => {
   return (
      <div>
         <h1 className='h1'>todos</h1>
         <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
      </div>
      
   )
}

export default AppHeader;