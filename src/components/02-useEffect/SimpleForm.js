import React, { useEffect, useState } from 'react'
import '../01-useState/index.css'
export const SimpleForm = () => {

    const [formState,SetFormState] = useState({
        name:"",
        email:""
    })

    const {name,email} = formState
    useEffect(function(){
        console.log("hey")
    })

    const [color,SetColor] = useState("red")

    
        window.addEventListener("mousemove",function(evento){
            if(evento.clientX < this.window.innerWidth /2){
                SetColor("green")
            }else{
                SetColor("red")
            }
        })
    useEffect(function(){
        console.log("cambio")
    },[color])

    
    

  return (
    <>
        <div className={color}>

        </div>

        <div className='form'>
            <input
            onChange={function(e){
                console.log(e.target)
            }}
             value={name}
             placeholder='Tu nombre'
              name='name'
               type='text'></input>
        </div>
    </>
  )
}
