import * as actions from '../actions';
import {
    uniqueId,
} from 'lodash';
const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TODO: {
            const todo = {
                id: uniqueId('id_'),
                title: action.value,
                completed: false,
            };
            const todos = [...state.todos];
            todos.push(todo);
            return Object.assign({}, state, {
                todos,
            });
        }
        case actions.SORT_TODOS: {
            const todos = [...state.todos];
            todos.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return 1;
                }
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
            return Object.assign({}, state, {
                todos,
            });
        }
        case actions.REMOVE_TODO: {
            const todos = [...state.todos];
            todos.splice(todos.findIndex(el => el.id === action.value), 1);
            return Object.assign({}, state, {
                todos,
            });
        }
        case actions.TOGGLE_TODO: {
            const todos = [...state.todos];
            const todoIndex = todos.findIndex(el => el.id === action.value);
            if (todos[todoIndex]) {
                todos[todoIndex].completed = !todos[todoIndex].completed;
            }
            return Object.assign({}, state, {
                todos,
            });
        }
        case actions.EDIT_TODO: {
            const todos = [...state.todos];
            const { id, title } = action.value;
            const todo = todos.find(el => el.id === id);
            if (todo) {
                todo.title = title;
            }
            return Object.assign({}, state, {
                todos,
            });
        }
        default:
            return state;
    }
};
