import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import './ToDoList.scss';
/**
 *  TODO
    добавлять todo по нажатию enter
    слева галочка - поставлено - выполнено
    справа крестик - удалить задачу
*/
class ToDoList extends Component {
    static propTypes = {
        model: PropTypes.object,
    }
    state = {
        newTodo: '',
    }
    _addTodo = (todo = {}) => {
        this.props.model.add(todo);
    }
    sort = () => {
        this.props.model.sortList();
    }
    _onChange = e => {
        this.setState({
            newTodo: e.target.value,
        });
    }
    onKeyPress = e => {
        if (e.key === 'Enter') {
            this._addTodo({ title: this.state.newTodo });
            this.setState({
                newTodo: '',
            });
        }
    }
    _removeTodo = id => {
        this.props.model.remove(id);
    }
    toggle = todo => {
        this.props.model.toggle(todo);
    }
    render() {
        return (
            <div className="todo-group d-flex">
                <div className="todo-group__enter form-group col-sm-4">
                    <input className="form-control" onKeyPress={this.onKeyPress} onChange={this._onChange} value={this.state.newTodo} placeholder="Enter ToDo title" />
                </div>
                <div className="todo-group__list col-sm-4">
                    <h4>ToDo List</h4>
                    <ul className="todo-list list-group-flush">
                        {
                            this.props.model.todos.map((el, index) => <ToDoItem id={index} key={index} todo={el} toggle={todo => this.toggle(todo)} removeTodo={this._removeTodo} />)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ToDoList;
