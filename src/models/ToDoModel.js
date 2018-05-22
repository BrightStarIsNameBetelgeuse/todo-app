import _ from 'lodash';
class ToDoModel {
    constructor() {
        this.todos = [];
        this.listeners = [];
        this.reverseSort = false;
    }

    runListeners = () => {
        this.listeners.forEach(cb => cb());
    }

    add = todo => {
        const t = {
            id: _.uniqueId('id_'),
            title: '',
            completed: false,
            ...todo,
        };
        this.todos.push(t);
        this.todos.sort(this.sortFunction({ reverse: true }));
        this.runListeners();
    };

    getTodoById = id => this.todos.find(el => el.id === id)
    toggle = todo => {
        const t = this.todos.find(el => el.id === todo.id);
        t.completed = !t.completed;
        this.runListeners();
    }

    getTodos = () => this.todos;
    remove = id => {
        this.todos.splice(this.todos.findIndex(el => el.id === id), 1);
        this.runListeners();
    }
    save = (todo, title) => {
        const t = this.todos.find(el => el.id === todo.id);
        t.title = title;
    }
    sortFunction = ({ reverse = false } = {}) => (a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return reverse ? 1 : -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return reverse ? -1 : 1;
        }
        return 0;
    }
    sortList = () => {
        this.todos.sort(this.sortFunction({ reverse: this.reverseSort }));
        this.reverseSort = !this.reverseSort;
        this.runListeners();
    }
    subscribe = onChange => {
        this.listeners.push(onChange);
    }
}

export default ToDoModel;
