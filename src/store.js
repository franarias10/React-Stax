import { createStore} from 'redux';
import reducer from './reducers';

//creamos el store ..le pasamos los reducers y el segundo parametro es para activar la extension de redux dev tools
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
