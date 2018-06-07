import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';
import {
    addTodo,
    sortTodos,
    removeTodo,
    toggleTodo,
    editTodo,
} from 'jsx/actions';
import './ToDoList.scss';

const mapStateToProps = state => ({
    todos: state.main.todos,
});

const mapDispatchToProps = dispatch => ({
    addTodo: title => {
        dispatch(addTodo(title));
    },
    sortTodos: () => {
        dispatch(sortTodos());
    },
    toggleTodo: id => {
        dispatch(toggleTodo(id));
    },
    removeTodo: id => {
        dispatch(removeTodo(id));
    },
    editTodo: (id, title) => {
        dispatch(editTodo({ id, title }));
    },
});

@connect(mapStateToProps, mapDispatchToProps)
class ToDoList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        addTodo: PropTypes.func.isRequired,
        sortTodos: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
    }
    state = {}

    addTodo = () => {
        this.input.value && this.props.addTodo(this.input.value.trim());
        this.input.value = '';
    }

    submitTodo = (id, title) => {
        this.props.editTodo(id, title);
        this.setState({
            editing: null,
        });
    }

    onKeyPress = e => {
        if (e.key === 'Enter') {
            this.addTodo();
        }
    }

    onEdit = id => {
        this.setState({
            editing: id,
        });
    }

    render() {
        const { todos, sortTodos, removeTodo, toggleTodo } = this.props;
        return (
            <div className="todo-group d-flex flex-column">
                <h2>ToDo List</h2>
                <div className="todo-group__enter form-inline d-flex col-sm-6">
                    <div className="form-group">
                        <input ref={el => this.input = el} className="form-control" onKeyPress={this.onKeyPress} placeholder="Enter ToDo title" />
                    </div>
                    <button type="button" className="btn btn-primary mx-sm-3" onClick={this.addTodo}>Add ToDo</button>
                    {
                        todos.length > 1 && <button type="button" className="btn btn-primary" onClick={sortTodos}>Sort</button>
                    }
                </div>
                <div className="todo-group__list mb-4">
                    <ul className="todo-list list-group d-inline-flex">
                        {
                            todos.map((el, index) =>
                                (<ToDoItem id={index}
                                    key={index}
                                    todo={el}
                                    editing={this.state.editing === el.id}
                                    onEdit={() => this.onEdit(el.id)}
                                    submitTodo={title => this.submitTodo(el.id, title)}
                                    toggle={() => toggleTodo(el.id)}
                                    removeTodo={() => removeTodo(el.id)}
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
