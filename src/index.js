import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { compose, createStore, applyMiddleware } from 'redux';
import AppState from './store/AppState';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const store = createStore(reducer, AppState, compose(applyMiddleware(thunk), 
                    window.devToolsExtension ? window.devToolsExtension() : f => f), 
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

