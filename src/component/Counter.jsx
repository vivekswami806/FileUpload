import React from 'react'
import { connect } from 'react-redux'
import { incHandler } from '../redux/action/actionCreator'
import { INC } from '../redux/action/actionType'

function Counter(props) {
    
  return (
    <div>
        <h1> Counter:{props.inc}</h1>
        <button onClick={()=>{
            props.incHandler(1)
        }}> INC

        </button>
    </div>
  )
}
function mapStateToProps(state){
    return state.counterReducer
}
function mapDispatchToProps(dispatch){
    return{
        incHandler:()=>{
                dispatch(incHandler())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)