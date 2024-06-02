import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
// Redux...
// import { Provider } from 'react-redux'
// import { May29Store } from './ReduxCourse/May29/Store/May29store.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>


      {/* <Provider store={May29Store}> */}

        <App />
      {/* </Provider> */}

    </React.StrictMode>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
