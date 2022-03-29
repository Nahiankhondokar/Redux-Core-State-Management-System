import { combineReducers } from 'redux';
import {inputFeildsReducer} from './studentReducer';


const reducers = combineReducers({
    studentInput : inputFeildsReducer
});


export default reducers;