import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.scss';

class ToDoItem extends Component {
    static propTypes = {
        removeTodo: PropTypes.func,
        todo: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired,
    }

    static defaultProps = {
        onChange: () => {},
        toggle: () => {},
    }

    state = { 
        completed: false,
    }

    _handleOnChange = e => {
        this.props.onChange(e.target.value);
    }

    _checkToDo = () => {
        this.props.toggle(this.props.todo);
        this.setState({ completed: !this.state.completed });
    }

    deleteToDo = () => {
        this.props.removeTodo(this.props.todo.id);
    }

    render() {
        const todo = this.props.todo;
        const classnames = `todo-item ${this.props.todo.completed ? 'checked' : ''}`;
        return (
            <li className={`list-group-item-action ${classnames}`}>
                <input type="checkbox" id={todo.id} onChange={this._checkToDo} />
                <label htmlFor={todo.id} />
                <span>{this.props.todo.title}</span>
                <span onClick={this.deleteToDo} className="close" />
            </li>
        );
    }
}

export default ToDoItem;
