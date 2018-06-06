import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoModel from '../../models/ToDoModel';
import './ToDoList.scss';

const model = ToDoModel.instance;

class ToDoList extends Component {
    state = {}

    addTodo = () => {
        if (this.input.value) {
            model.add({ title: this.input.value.trim() });
            this.input.value = '';
        }
    }

    submitTodo = (todo, title) => {
        model.save(todo, title);
        this.setState({
            editing: null,
        });
    }

    sortList = () => {
        model.sortList();
    }

    onKeyPress = e => {
        if (e.key === 'Enter') {
            this._addTodo();
        }
    }

    onEdit = todo => {
        this.setState({
            editing: todo.id,
        });
    }

    removeTodo = id => {
        model.remove(id);
    }

    toggle = todo => {
        model.toggle(todo);
    }
    render() {
        const todosCount = model.getTodos().length;
        return (
            <div className="todo-group d-flex flex-column">
                <h2>ToDo List</h2>
                <div className="todo-group__enter form-inline d-flex col-sm-6">
                    <div className="form-group">
                        <input ref={el => this.input = el} className="form-control" onKeyPress={this._onKeyPress} placeholder="Enter ToDo title" />
                    </div>
                    <button type="button" className="btn btn-primary mx-sm-3" onClick={this._addTodo}>Add ToDo</button>
                    {
                        todosCount > 1 && <button type="button" className="btn btn-primary" onClick={this._sortList}>Sort</button>
                    }
                </div>
                <div className="todo-group__list mb-4">
                    <ul className="todo-list list-group d-inline-flex">
                        {
                            model.todos.map((el, index) =>
                                (<ToDoItem id={index}
                                    key={index}
                                    todo={el}
                                    editing={this.state.editing === el.id}
                                    onEdit={() => this._onEdit(el)}
                                    submitTodo={title => this._submitTodo(el, title)}
                                    toggle={todo => this._toggle(todo)}
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
