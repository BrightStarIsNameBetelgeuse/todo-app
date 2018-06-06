import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './ToDoItem.scss';

class ToDoItem extends Component {
    static propTypes = {
        editing: PropTypes.bool.isRequired,
        onEdit: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired,
        todo: PropTypes.object.isRequired,
        submitTodo: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired,
    }

    state = {
        editingText: '',
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

    onSave = () => {
        if (this.state.editingText) {
            this.props.submitTodo(this.state.editingText);
        }
    }

    deleteToDo = () => {
        this.props.removeTodo(this.props.todo.id);
    }

    componentDidUpdate (prevProps) {
        if (!prevProps.editing && this.props.editing) {
            this.editInput.focus();
        }
    }

    render () {
        const { todo, editing } = this.props;
        return (
            <li className={cn('todo-item list-group-item list-group-item-action d-flex', { checked: todo.completed, editing })}>
                <input type="checkbox" id={todo.id} onChange={this._checkToDo} />
                <label htmlFor={todo.id} />
                <span className="todo-title" onDoubleClick={this._handleEdit}>{todo.title}</span>
                <span onClick={this.deleteToDo} className="close" />
                <input type="text" ref={el => this.editInput = el} value={this.state.editingText} onKeyPress={e => e.key === 'Enter' && this.onSave()} onChange={this._onChangeItem} onBlur={this.onSave} />
            </li>
        );
    }
}

export default ToDoItem;
