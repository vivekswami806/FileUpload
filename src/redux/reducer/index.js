import { combineReducers } from "redux";
import formReducer from "./formReducer";
import { counterReducer } from "./counterReducer";
import {inputReducer} from "./inputReducer"
import { fetchreducer } from "./fetchReducer";
export const rootReducer=combineReducers({formReducer,
    counterReducer,
    inputReducer,
fetchreducer
    
})








