import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './header';
import NewTaskForm from './new-task-form';
import TaskList from './task-list';
import Footer from './footer';

class App extends Component {

   maxId = 1;
   
   state = {
      todoData : [
         this.createTodoItem('Complated task'),
         this.createTodoItem('Editing task'),
         this.createTodoItem('Active task')
      ],
      checkedListAll: [],
      itemsCheked: false
   };

   createTodoItem(label) {
      return {
         label,
         // important: false,
         done: false,
         id: this.maxId++,
         checked: false,
         view: false
      }
   }

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
   
   addItems = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {
         const newArr = [
            ...todoData,
            newItem
         ];

         return {
            todoData: newArr
         }         
      });
   }

   toggleProperty (arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = {...oldItem, 
         [propName]: !oldItem[propName]};

      return [
         ...arr.slice(0, idx), 
         newItem,
         ...arr.slice(idx + 1)
      ];
   }

   onToggleDone = (id) => {
      this.setState(({ todoData }) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'done')
         };
      });
   };

   toggleFilter (arr, mark)  {
      const newArr = arr
         for(let item of newArr) {
            if(item.done === mark) item.view = !item.view
         }
         return {
            arr: newArr
         }
   }

   onToggleActive = () => {      
      this.setState(({ todoData }) => {
         return this.toggleFilter(todoData, true)
      })
   }

   onToggleCompleted = () => {      
      this.setState(({ todoData }) => {
         return this.toggleFilter(todoData, false)
      })
   }
   
    
   render() {
      return (
         <section className="todoapp">
            <Header />
            <NewTaskForm addItems={this.addItems}/>
            <TaskList 
               todos={this.state.todoData}
               onDeleted={ this.deleteItem }
               onToggleDone={this.onToggleDone}
            />
            <Footer 
               onToggleActive={this.onToggleActive}
               onToggleCompleted={this.onToggleCompleted}
               todos={this.state.todoData}
            />
         </section>
      );
   }

   
};

ReactDOM.render(<App />,
   document.getElementById('root'))




