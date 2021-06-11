import React, { Component } from 'react';

import './new-task-form.css';


export default class NewTaskForm extends Component {

  state = {
    label: ''
  }

  onLableChange = (e) => {
    this.setState( {
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItems(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return  (
      <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            className="new-todo" 
            placeholder="What needs to be done?"
            value={this.state.label}
            onChange={this.onLableChange} 
          />
      </form>
    );
  };  
};
