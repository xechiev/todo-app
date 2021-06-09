import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './header';
import NewTaskForm from './new-task-form';
import TaskList from './task-list';
import Footer from './footer';

class App extends Component {

   state = {
      todoData : [
         {label: 'Complated task', important: false, id: 1},
         {label: 'Editing task', important: true, id: 2},
         {label: 'Active task', important: false, id: 3}
      ]
   };

   deleteItem = (id) => {
      this.setState(({ todoData }) => {
         const idx = todoData.findIndex((el) => el.id === id)

         const newArray = [
            ...todoData.slice(0, idx), 
            ...todoData.slice(idx + 1)
         ];

         return {
            todoData: newArray
         }
      });
   };
   
   // onItemAdded = (text) => {
   //    const newItem = {
   //       label: text,
   //       important: false,
   //       id: this.maxId++
   //    };

   //    this.setState(({ todoData }) => {
   //       const newArr = [
   //          ...todoData,
   //          newItem
   //       ];

   //       return {
   //          todoData: newArr
   //       }         
   //    });
   // }

   render() {
      return (
         <section className="todoapp">
            <Header />
            <NewTaskForm />
            <TaskList 
               todos={this.state.todoData}
               onDeleted={ this.deleteItem }/>
            <Footer />
         </section>
      );
   }

   
};

ReactDOM.render(<App />,
   document.getElementById('root'))




