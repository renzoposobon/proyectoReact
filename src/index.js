import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { CartContextProvider } from './componentes/context/CartContext';
import { Provider } from 'react-redux';
import appReducer from './componentes/reducer/reducers'
import { createStore } from 'redux';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};
  
const app = initializeApp(firebaseConfig);

const store = createStore(appReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </Provider>
);

reportWebVitals();
