import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';


export default class NewTaskForm extends Component {

  static propTypes = {
    addItem: PropTypes.func.isRequired
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
    this.props.addItems(this.state.label);
    this.setState({
      label: ''
    });
  };

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
    );
  };  
};
