export const ADD_TODO = 'ADD_TODO';
export const addTodo = value => ({
    type: ADD_TODO,
    value,
});


export const SORT_TODOS = 'SORT_TODOS';
export const sortTodos = () => ({
    type: SORT_TODOS,
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = value => ({
    type: REMOVE_TODO,
    value,
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = value => ({
    type: TOGGLE_TODO,
    value,
});

export const EDIT_TODO = 'EDIT_TODO';
export const editTodo = value => ({
    type: EDIT_TODO,
    value,
});
