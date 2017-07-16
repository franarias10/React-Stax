import { createStore, applyMiddleware} from 'redux';//applyMiddleware sirve para usar middleware en el store
import reducer from '../reducers';
//import thunk from 'redux-thunk';
import promise from 'redux-promise';

//creamos el store ..le pasamos los reducers y el segundo parametro es para activar la extension de redux dev tools
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(promise));

export default store;
