import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from 'jsx/components/Navigation';
import ToDoModel from 'models/ToDoModel';
import ToDoList from 'jsx/components/ToDoList';
import 'styles/index.scss';

const Routes = () => (
    <Router>
        <div>
            <Navigation />
            <Route exact path="/" render={props => <ToDoList {...props} model={ToDoModel} />} />
        </div>
    </Router>
);

export default Routes;
