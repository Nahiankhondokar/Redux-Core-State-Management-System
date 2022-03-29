import {studentsActions} from '../actionTypes/students-actions';


const initialState = {
    inputFeilds : {
        name    : 'nahian',
        age     : 25,
        skill   : 'MEARN Dev'
    },
    sutdent     : []
}



export const inputFeildsReducer = (state = initialState, { type, payload }) => {

    switch(type){

        case studentsActions.INPUT_FIELDS :
        return { ...state, inputFeilds : payload }

        default : 
        return state;

    }

}

