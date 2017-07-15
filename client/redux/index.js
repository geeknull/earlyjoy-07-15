import {createStore} from 'redux';
import reducers from './reducer/index.js';

let store = createStore(
  reducers
);

export default store;
