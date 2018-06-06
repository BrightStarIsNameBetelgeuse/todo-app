import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from 'jsx/reducers';
import { AppContainer } from 'react-hot-loader';
import ToDoList from 'jsx/components/ToDoList';
import ToDoModel from 'models/ToDoModel';
import 'styles/index.scss';

const store = createStore();

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider>
                <ToDoList />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

window.onload = () => {
    ToDoModel.instance.subscribe(render);
    render();
};

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./index', () => {
        const NextApp = require('./index').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
