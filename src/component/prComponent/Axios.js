import React, { useEffect, useState } from 'react'
import axios from "axios"
function Axios() {
    let [ data, setData]= useState([])
   async function fetchdata(){  
            try{
                let url= axios.get("https://dummyjson.com/users")
                let res = await url;
                console.log(res)
                 let data= await res.data ;
               setData(data.users)
            }
            catch(err){
                console.log(err);
            }
        }
        console.log(data);
    useEffect(()=>{
      fetchdata()
    },[])
  return (
    <div>Axios</div>
  )
}

export default Axios