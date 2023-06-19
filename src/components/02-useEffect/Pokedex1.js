import React, { useState } from 'react'
import { useFerch } from '../../Hooks/useFerch'
import './index.css'
import { useEffect } from 'react';
import bola from '../../bolaPokemon.png'
export const Pokedex1 = () => {
    //------------------------------
    let img = bola
    let loading1 = true
    let nombre = "nombre"
    let tipo1 = "-"
    let tipo2 = "-"
    let hp = 0
    let attack = 0
    let defense = 0
    let specialAtt = 0
    let specialDef = 0
    let speed = 0;

    //-------------------------------------------
    const [pokemon, SetPokemon] = useState(1);
    try{
        const values = useFerch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const {data,loading} = values; //data.sprites.front_default
    loading1 = loading
    const {front_default} = !!data && data.sprites
    img = front_default
    const {name} = !!data && data.forms[0]
    nombre = name
    const {name:i} = !!data && data.types[0].type
    tipo1 = i
    const {name:y = "-"} = !!data && !!data.types[1] && data.types[1].type
    tipo2 = y
    const {base_stat} = !!data && data.stats[0]
    hp = base_stat
    const {base_stat:p} = !!data && data.stats[1]
    attack =p
    const {base_stat:u} = !!data && data.stats[2]
    defense =u
    const {base_stat:spet} = !!data && data.stats[3]
    specialAtt =spet
    const {base_stat:specialDe} = !!data && data.stats[4]
    specialDef = specialDe
    const {base_stat:m} = !!data && data.stats[5]
    speed = m
    }catch(e){
        console.log("vacio")
    }
    


    
    
  return (
    <div className='principal'>
        <h1>Pokedex Nacional</h1>
        {loading1 === true ? (<p>Loagind...</p>):(
            <div className='contenedor'>
                <img className='img' alt='img pokemon' src={img}/>
                <div className='divtipo'>
                    <p>{nombre}</p>
                    <p className={tipo1}>{tipo1}</p>
                    <p className={tipo2}>{tipo2}</p>
                    
                </div>

                <div className='stats'>
                    <h4>stats</h4>
                    <div className='grid'>
                        <p>hp:{hp}</p>
                        <p>attack:{attack}</p>
                        <p>defense:{defense}</p>
                        <p>special-attack:{specialAtt}</p>
                        <p>special-attack: {specialDef}</p>
                        <p>speed: {speed}</p>
                    </div>
                </div>
            </div>
            
        )}
        <p>#Pokemon actual "{pokemon}"</p>
        <div>
        <button onClick={()=>{
            SetPokemon(parseFloat(pokemon)-1)
            if(pokemon <=1){
                SetPokemon(1)
            }
        }}>-1</button>
        <button onClick={()=>{
            SetPokemon(parseFloat(pokemon)+1)
        }}>+1</button>

        <input name='pokemon' onChange={(evet)=>{
                SetPokemon(evet.target.value)
        }
    } type='number' value={pokemon} minLength={1}/>
        </div>
        
        
    </div>
  )
}
