import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App';
import usersApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import api from './middleware/api';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
let store = createStoreWithMiddleware(usersApp);
let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
