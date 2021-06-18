import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';


export default class NewTaskForm extends Component {

  static propTypes = {
    addItems: PropTypes.func
  }

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
    const { label } = this.state
    const { addItems } = this.props;

    if(label.trim()) {
      addItems(label);
      this.setState({
        label: ''
      })
    }

  }

  render() {
    const { label } = this.state;
    return  (
      <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            className="new-todo" 
            placeholder="What needs to be done?"
            value={label}
            onChange={this.onLableChange} 
          />
      </form>
    )
  }  
}
