import React, { useState } from 'react'
import { useForm } from '../../Hooks/useForm';


export const FormWithCustomHook = () => {

    const [input, set] = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name,email,password} = input;
    
     const enviar = (e)=>{
        e.preventDefault();
        console.log(input)
     }

  return (
    <form onSubmit={enviar}>
        <h1>useEffect</h1>
        <div className='form-group'>
            <input 
            type='text'
            name="name"
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={set}
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
            onChange={set}
            />
        </div>

        <div className='form-group'>
            <input 
            type='password'
            name="password"
            className='form-control'
            placeholder='Contraseña'
            autoComplete='off'
            value={password}
            onChange={set}
            />
        </div>
        {name == 123?(<p>Buenas</p>):null}
        {email == 456?(<p>no valido</p>):null}
        {password == name && password != ""?(<p>igual a nombre</p>):null}
        
        <button type='submit'>Enviar</button>
    </form>

  )
}