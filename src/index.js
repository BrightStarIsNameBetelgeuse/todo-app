import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ToDoList from 'jsx/components/ToDoList';
import ToDoModel from 'models/ToDoModel';

const model = new ToDoModel();

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <ToDoList model={model} />
        </AppContainer>,
        document.getElementById('app')
    );
};

window.onload = () => {
    model.subscribe(render);
    render();
};

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
