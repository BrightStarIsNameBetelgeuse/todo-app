import React from 'react';
import 'normalize.css';
import 'styles/index.scss';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <div>
                    <h1>It Works!</h1>
                    <p>This React project just works including <span className="redBg">module</span> local styles.</p>
                    <p>Enjoy!</p>
                </div>
            </div>
        );
    }
}

export default App;