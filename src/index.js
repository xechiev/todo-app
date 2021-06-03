import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import './index.css'

const App = () => {
   return (
      <div className='todoapp'>
         <AppHeader/>
      </div>
   )
};

ReactDOM.render(<App />,
   document.getElementById('root')); 