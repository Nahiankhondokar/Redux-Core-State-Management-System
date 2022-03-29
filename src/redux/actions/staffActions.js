import { staffActionsType } from "../actionTypes/staffActionsType"



export const StaffActions = (inputs) => {

    return {
        type : staffActionsType.STAFF_INPUT_FEILDS,
        payload : inputs
    }

}


