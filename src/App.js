import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Main from './Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const middlewares = [
  ReduxThunk,
];


const store = createStore(
  reducers, {}, applyMiddleware(...middlewares)
);


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
