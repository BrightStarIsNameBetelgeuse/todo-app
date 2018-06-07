import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'jsx/reducers';

const extend = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const store = createStore(persistedReducer, extend);
    const persistor = persistStore(store);
    if (module.hot) {
        module.hot.accept(() => {
            // This fetch the new state of the above reducers.
            const nextRootReducer = require('jsx/reducers');
            store.replaceReducer(
                persistReducer(persistConfig, nextRootReducer)
            );
        });
    }
    return { store, persistor };
};
