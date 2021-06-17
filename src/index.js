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
         this.createTodoItem('Completed task'),
         this.createTodoItem('Editing task'),
         this.createTodoItem('Active task')
      ], 
      Itemfilter: 'all',
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
   
   addItems = (text) => {
      if (!text.match(/^[ ]+$/) && text.length >= 1) {
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
      };
   };

   onToggleDone = (id) => {
      this.setState(({ todoData }) => {
         const newArr = todoData.map((el) => {
            if(el.id === id) {
               el.done = !el.done
            }
            return el;
         })
         return {
            todoData: newArr
         }
      });
   };

   onClearCompleted = () => {
      this.setState(({ todoData }) => {
         const clearCompl = todoData.filter((el) => !el.done);
         return {
            todoData: clearCompl
         }
      })
   }

   createTodoItem(label) {
      return {
         label,
         done: false,
         id: this.maxId++,
         timeCreate: Date.now()
      } 
   }

   onFilterItems(arr, filter) {
      if (filter === 'all') {
        return arr;
      } else if (filter === 'active') {
        return arr.filter((item) => (!item.done));
      } else if (filter === 'completed') {
        return arr.filter((item) => item.done);
      }
    }

   onfilterTodos = (value) => {
      this.setState({ Itemfilter: value });
    };


   render() {
      const { todoData, Itemfilter } = this.state;
      const todos = this.onFilterItems(todoData, Itemfilter);
      

      return (
         <section className="todoapp">
            <Header />
            <NewTaskForm addItems={this.addItems}/>
            <TaskList 
               todos={todos}
               onDeleted={ this.deleteItem }
               onToggleDone={this.onToggleDone}
            />
            <Footer 
               onClearCompleted={this.onClearCompleted}
               onfilterTodos={this.onfilterTodos}
               todos={todoData}
            />
         </section>
      );
   }

   
};

ReactDOM.render(<App />,
   document.getElementById('root'))




