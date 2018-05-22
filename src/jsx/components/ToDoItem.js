import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ToDoItem.scss';

class ToDoItem extends Component {
    static propTypes = {
        editing: PropTypes.bool.isRequired,
        onEdit: PropTypes.func,
        removeTodo: PropTypes.func,
        todo: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        submitTodo: PropTypes.func,
        toggle: PropTypes.func.isRequired,
    }

    static defaultProps = {
        onChange: () => {},
        toggle: () => {},
    }

    state = {
        editingText: '',
    }

    _handleOnChange = e => {
        this.props.onChange(e.target.value);
    }

    _handleEdit = () => {
        this.props.onEdit();
        this.setState({
            editingText: this.props.todo.title,
        });
    }

    _onChangeItem = e => {
        this.setState({
            editingText: e.target.value,
        });
    }

    _checkToDo = () => {
        this.props.toggle(this.props.todo);
    }

    _onSave = () => {
        if (this.state.editingText) {
            this.props.submitTodo(this.state.editingText);
        }
    }

    _deleteToDo = () => {
        this.props.removeTodo(this.props.todo.id);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.editing && this.props.editing) {
            this.editInput.focus();
        }
    }

    render() {
        const todo = this.props.todo;
        return (
            <li className={classnames('todo-item list-group-item list-group-item-action d-flex', { checked: this.props.todo.completed, editing: this.props.editing })}>
                <input type="checkbox" id={todo.id} onChange={this._checkToDo} />
                <label htmlFor={todo.id} />
                <span className="todo-title" onDoubleClick={this._handleEdit}>{this.props.todo.title}</span>
                <span onClick={this._deleteToDo} className="close" />
                <input type="text" ref={el => this.editInput = el} value={this.state.editingText} onKeyPress={e => e.key === 'Enter' && this._onSave()} onChange={this._onChangeItem} onBlur={this._onSave} />
            </li>
        );
    }
}

export default ToDoItem;
