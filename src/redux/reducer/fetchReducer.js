import { ERROR, FETCHED, LOADING } from "../action/actionType";

let inState={
    loading:false,
    data:[],
    err:""
}
 export function fetchreducer(state=inState,action){
  switch (action) {
    case LOADING:
        return{...state , loading:true}
        case FETCHED:
            return{...state, data:action.payload,loading:false}
     case ERROR:
        return{...state , err:action.payload , loading:false} 
  
    default:
    return  state
  }

}