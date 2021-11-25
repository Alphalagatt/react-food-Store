import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import AllReducers from './Components/ComponentCss/ReduxTools/Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(AllReducers,composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
<BrowserRouter>
 <App />
</BrowserRouter>
</Provider>,
document.getElementById('root'));

