import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configuredStore from 'utils/configureStore';
import { AppContainer } from 'react-hot-loader';
import ToDoList from 'jsx/components/ToDoList';
import 'styles/index.scss';

window.onload = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configuredStore().store}>
                <PersistGate persistor={configuredStore().persistor}>
                    <ToDoList />
                </PersistGate>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
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
