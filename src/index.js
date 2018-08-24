import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers.js';
import 'tachyons';
import App from './containers/App';
import { robots, } from './robots';

//import App from './App';
//import Hello from './Hello';
// import Card from './Card';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = 
 createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
	            <Provider store={store}>
	              <App />
	            </Provider>,
	             document.getElementById('root')
	);
registerServiceWorker();
