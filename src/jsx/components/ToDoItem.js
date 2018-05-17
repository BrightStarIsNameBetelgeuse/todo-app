import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.scss';

class ToDoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired,
    }

    static defaultProps = {
        onChange: () => {},
        toggle: () => {},
    }

    _handleOnChange = e => {
        this.props.onChange(e.target.value);
    }

    render() {
        const classnames = `todo-item ${this.props.todo.completed ? 'checked' : ''}`;
        return (
            <li>
                <div className={classnames} onClick={() => this.props.toggle(this.props.todo)}>
                    <span>{this.props.todo.title}</span>
                    <span className='todo-check'></span>
                </div>
            </li>
        );
    }
}

export default ToDoItem;
