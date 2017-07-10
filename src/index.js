import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';//-->importamos react-redux
import store from './store';//-->importamos el store


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  ,
   document.getElementById('root'));
registerServiceWorker();
