import React from 'react'
import { getData } from '../redux/action/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { fetchreducer } from '../redux/reducer/fetchReducer'

function FetchData() {
    let dispatch= useDispatch()
   let data= useSelector((items)=>{
    return items.fetchreducer
   })
   
  return (
    <div>
        <button onClick={()=>{           
          dispatch(getData())
        }}>
            GetData 
        </button>
    </div>
  )
}

export default FetchData