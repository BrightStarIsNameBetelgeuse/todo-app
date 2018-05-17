import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul className='row'>
                    <li className='col-sm-2'><Link to="/">Home</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
