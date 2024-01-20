import { INC } from "../action/actionType"

let initialState ={
    inc:10
}

export function counterReducer(state=initialState,action){
    if(action.type== INC){
        
        return {...state, inc:state.inc+1}
    }
    else{
        return state
    }
}