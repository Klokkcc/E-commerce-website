import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import { PersistGate } from 'redux-persist/integration/react'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={"loading"} persistor={persistor}> 
  <App />
  </PersistGate>
 
  </Provider>
   
  </React.StrictMode>
);

reportWebVitals();
