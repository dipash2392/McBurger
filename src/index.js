import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react'
import Loader from "./components/Utils/Loader/Loader"

ReactDOM.render(
  <Provider store={store().store}>
  {/* <PersistGate loading={<Loader/>}  persistor={store().persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  {/* </PersistGate> */}
</Provider>
,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
