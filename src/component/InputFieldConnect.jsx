import React from 'react'
import { connect } from 'react-redux'
import inputReducer from '../redux/reducer/inputReducer'
import { inputHandel } from '../redux/action/actionCreator'

function InputFieldConnect(props) {
  return (
    <div>
        <input type="text" value={props.text} 
        onChange={(e)=>{
           props.inputHandel(e)
        }}/>
   <h1>{props.text} </h1>
    </div>
  )
}

function mapStateToProps(state){
    return state.inputReducer
}
function mapDispatchToProps(dispatch){
    return {inputHandel:(e)=>{
        dispatch(inputHandel(e))
    }}
}

export default connect(mapStateToProps,mapDispatchToProps)(InputFieldConnect)