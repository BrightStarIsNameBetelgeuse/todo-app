import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
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
    _removeTodo = () => {
        
    }
    toggle = todo => {
        this.props.model.toggle(todo);
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.model.todos.map((el, index) => <ToDoItem key={index} todo={el} toggle={todo => this.toggle(todo)} removeTodo={this._removeTodo} />)
                    }
                </ul>
                <input onKeyPress={this.onKeyPress} onChange={this._onChange} value={this.state.newTodo} />
            </div>
        );
    }
}

export default ToDoList;
