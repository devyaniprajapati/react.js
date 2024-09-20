// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './Counter';
import Theme from './Theme';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Theme />
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
