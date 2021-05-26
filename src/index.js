import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'
const store = createStore(rootReducer)

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

const AppWithRouter = () => (
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>
)



ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
