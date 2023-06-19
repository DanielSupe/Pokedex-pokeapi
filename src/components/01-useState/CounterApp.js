import React, { useState } from 'react'
import './index.css'
export const CounterApp = () => {

    const [state,Setstate] = useState({
        counter1:0,
        counter2:0,
        counter3:10,
        counter4:20           })

    const {counter1,counter2,counter3,counter4} = state
  return (
    <>
    <h1>Counter: {counter1}</h1>
    <h1>Counter: {counter2}</h1>
    <h1>Counter: {counter3}</h1>
    <h1>Counter: {counter4}</h1>
    
    <br/>
    <button onClick={function(){
        Setstate({
            ...state, //Realiza una copia para que no se piedan los demas valores que no estamos tocando
            counter1:counter1+1,
            counter2:counter2 +2
        })
    }} className='btn btn-primary'>+1</button>
    </>
  )
}
