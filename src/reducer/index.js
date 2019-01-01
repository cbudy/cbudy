import { combineReducers } from 'redux'; 
import userReducer from './userReducer' 
import userDataReducer from './userData'
const rootReducer = combineReducers({
    user: userReducer, 
    userData:userDataReducer
 }) 

export default rootReducer;