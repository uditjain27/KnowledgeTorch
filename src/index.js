import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from "./store/login-context";
import { Provider } from 'react-redux';
import store from './store/login-store';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);