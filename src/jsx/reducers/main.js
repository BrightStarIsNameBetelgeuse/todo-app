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
                title: actions.title,
                completed: false,
            };
            // TODO must sort
            const todos = [...state.todos].push(todo);
            return Object.assign({}, state, {
                todos,
            });
        }
        default:
            return state;
    }
};
