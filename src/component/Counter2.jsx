import React, { useState } from 'react'

function  Counter2() {
    let [count, setcount]= useState(1);
    function divClick(){
        setcount(count+1)
    }
  return (
    <div onClick={divClick} style={{fontSize:`${count}rem`}}>hii </div>
  )
}

export default  Counter2