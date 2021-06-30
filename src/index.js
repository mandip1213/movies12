import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MoviesProvider} from "./Components/moviescontext"
import "./Components/css/navbar.css"
import "./Components/css/movieslist.css"
import "./Components/css/pagination.css"

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
         <App />
         </MoviesProvider>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
