class ToDoModel {
    constructor() {
        this.todos = [];
    }

    add = todo => {
        const t = {
            id: this.todos.length,
            title: '',
            completed: false,
            ...todo,
        };
        this.todos.push(t);
    };

    getTodo = id => this.todos.find(el => el.id === id)
    toggle = todo => {
        const t = this.todos.find(el => el.id === todo.id);
        t.completed = !t.completed;
    }

    getList = () => this.todos;
    remove = id => {
        this.todos.find(el => el.id === id && this.todos.splice(id, 1));
    }
}

let model;

if (!model) {
    model = new ToDoModel();
}

export default model;
