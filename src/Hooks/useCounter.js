import { useState } from "react"


export const useCounter = function(Inicial = 0,incremento = 1){

    const [state,Setstate] = useState(Inicial)

    const sumar = function(){
        Setstate(state+incremento);
    }

    const restar = function(){
        Setstate(state-incremento);
    }

    const reiniciar = function(){
        Setstate(Inicial);
    }

    return{
        state,
        sumar,
        restar,
        reiniciar
    }

}