import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import ContextApi from './ContextApi/ContextApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextApi>
    <App />
    </ContextApi>
    </Provider>
  </React.StrictMode>
);