import React, { useEffect, useState } from 'react'
import { Mensaje } from './Mensaje';

export const UseEffect2 = () => {

    const [input,setinput] = useState({
        name:'',
        email:''
    });

    const {name,email} = input;
    
     

    useEffect(()=>{
        console.log("hey")
    },[])
    useEffect(()=>{
        console.log("cambio")
    },[name])

    const a = ({target})=>{
        setinput({
            ...input,
            [target.name]:target.value

        })
    }
  return (
    <div>
        <h1>useEffect</h1>
        <div className='form-group'>
            <input 
            type='text'
            name="name"
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={a}
            />
        </div>

        <div className='form-group'>
            <input 
            type='text'
            name="email"
            className='form-control'
            placeholder='email@gmail.com'
            autoComplete='off'
            value={email}
            onChange={a}
            />
        </div>

        {name.length >= 5 && email.length >= 10 ? (<p><Mensaje/></p>):null}
        
        
    </div>

  )
}
