import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import ReducerStore from '../config/redux/ReducerStore';
const store = applyMiddleware(promise)(createStore)(ReducerStore)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app')
);
