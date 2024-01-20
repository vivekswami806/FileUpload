import React from 'react'
import { INPUT } from '../action/actionType'
let inState={
    text:""
}
 export const inputReducer = (state=inState,action) => {
   if(action.type==INPUT){
    return {...state,text:action.payload.target.value}
   }else{
    return state
   }
}

