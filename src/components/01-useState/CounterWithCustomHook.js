import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
export const CounterWithCustomHook = () => {

    const {state,sumar,restar,reiniciar} = useCounter(10,20)
  return (
    <>
        <h1>Counter with wook: {state}</h1>
        <br/>

        <button onClick={sumar}>+1</button>
        <button onClick={restar}>-1</button>
        <button onClick={reiniciar}>Reiniciar</button>
        
    </>
  )
}
