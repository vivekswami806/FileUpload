import { UseDispatch, useDispatch } from "react-redux";
import { ERROR, FETCHED, INC, INPUT, LOADING, SUBMIT } from "./actionType";

export function incHandler(inc){
    return{type: INC, payload:inc}
}
export function inputHandel(e){
    return{type:INPUT , payload:e}
}
export function getData(){
    return (dispatch)=>{
        dispatch({type:LOADING})
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{return res.json()})
        .then((data)=>{ 
             console.log(data);
            dispatch({type:FETCHED, payload:data})})
        .catch((err)=>{ dispatch({type:ERROR, payload:err})})
    }
    
}
