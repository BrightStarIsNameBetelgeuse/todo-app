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

    state = {}

    _addTodo = () => {
        if (this.input.value) {
            this.props.model.add({ title: this.input.value.trim() });
            this.input.value = '';
        }
    }

    _submitTodo = (todo, title) => {
        this.props.model.save(todo, title);
        this.setState({
            editing: null,
        });
    }
    sortList = () => {
        this.props.model.sortList();
    }

    onClick = () => {
        this._addTodo();
    }
    onKeyPress = e => {
        if (e.key === 'Enter') {
            this._addTodo();
        }
    }

    _onEdit = todo => {
        this.setState({
            editing: todo.id,
        });
    }

    _removeTodo = id => {
        this.props.model.remove(id);
    }
    toggle = todo => {
        this.props.model.toggle(todo);
    }
    render() {
        const todosCount = this.props.model.getTodos().length;
        return (
            <div className="todo-group d-flex flex-column">
                <h2>ToDo List</h2>
                <div className="todo-group__enter form-inline d-flex col-sm-6">
                    <div className="form-group">
                        <input ref={el => this.input = el} className="form-control" onKeyPress={this.onKeyPress} placeholder="Enter ToDo title" />
                    </div>
                    <button type="button" className="btn btn-primary mx-sm-3" onClick={this.onClick}>Add ToDo</button>
                    {
                        todosCount > 1 && <button type="button" className="btn btn-primary" onClick={this.sortList}>Sort</button>
                    }
                </div>
                <div className="todo-group__list">
                    <ul className="todo-list list-group d-inline-flex">
                        {
                            this.props.model.todos.map((el, index) =>
                                (<ToDoItem id={index}
                                    key={index}
                                    todo={el}
                                    editing={this.state.editing === el.id}
                                    onEdit={() => this._onEdit(el)}
                                    onSave={() => this._onSave(el)}
                                    submitTodo={title => this._submitTodo(el, title)}
                                    toggle={todo => this.toggle(todo)}
                                    removeTodo={this._removeTodo}
                                />)
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ToDoList;
