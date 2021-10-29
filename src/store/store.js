import { createStore } from 'redux';
import reducer from '../reducers/counterReducers';

const store = createStore(reducer);

export default store;