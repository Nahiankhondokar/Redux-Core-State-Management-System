import { staffActionsType } from "../actionTypes/staffActionsType"



const initialState = {
    inputFeilds : {
        name : 'Pro lavel staff',
        age  : 30,
        skill : 'Project Management'
    },
    staff : []
}


export const staffInputFeildsReducer = (state = initialState, { type, payload }) => {

    switch(type){

        case staffActionsType.STAFF_INPUT_FEILDS :
        return {
            
        }

        default : 
        return state;

    }

}


