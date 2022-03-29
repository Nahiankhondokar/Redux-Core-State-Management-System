import { studentsActions } from "../actionTypes/students-actions"




export const setInputFeilds =  (inputs) => {
    return {
        type : studentsActions.INPUT_FIELDS,
        payload : inputs
    }
}