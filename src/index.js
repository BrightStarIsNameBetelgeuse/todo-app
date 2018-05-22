import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ToDoList from 'jsx/components/ToDoList';
import ToDoModel from 'models/ToDoModel';
import 'styles/index.scss';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <ToDoList />
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
