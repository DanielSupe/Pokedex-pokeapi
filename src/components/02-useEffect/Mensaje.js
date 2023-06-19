import React, { useEffect, useState } from 'react'

export const Mensaje = () => {
  const [corderanda,SetCordernada] = useState({
    x:0,
    y:0
  })
  const {x,y} = corderanda

    

    useEffect(function(){
      const movermause = (e) =>{
        SetCordernada({x:e.x,y:e.y})
      }
        
        window.addEventListener('mousemove',movermause)

        return ()=>{
            window.removeEventListener('mousemove',movermause)
        } 
    })
  return (
    <>
        <strong>Validoo</strong>
        <p>`x:${x},y:{y}`</p>
    </>
  )
}
