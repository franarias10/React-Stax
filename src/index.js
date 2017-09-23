import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';//-->importamos react-redux
import store from './store';//-->importamos el store
import { BrowserRouter as Router } from 'react-router-dom';
// Routes
import AppRoutes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router>
     <AppRoutes />
    </Router>
  </Provider>  ,
   document.getElementById('root'));
registerServiceWorker();
//test