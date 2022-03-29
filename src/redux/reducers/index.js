import { combineReducers } from 'redux';
import { staffInputFeildsReducer } from './staffReducer';
import { inputFeildsReducer } from './studentReducer';


const reducers = combineReducers({
    studentInput : inputFeildsReducer,
    staffInput   : staffInputFeildsReducer
});


export default reducers;