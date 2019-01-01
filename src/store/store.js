import rootReducer from '../reducer';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'
const initalState = {};
const middalware = [thunk];
const Store =
    createStore(
        rootReducer,
        initalState,
        applyMiddleware(...middalware), 
    );
export default Store;