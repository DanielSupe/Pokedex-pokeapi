import { useEffect, useState } from "react"

export const useFerch = (url) => {
    const [values,SetValues] = useState({
        data:null,
        loading:true,
        error:null
    })

   useEffect(()=>{
        fetch(url).then(resp => resp.json().then(data =>{
            SetValues({
                loading:false,
                error:null,
                data
            })
        }))
   },[url]) 

   return values;
}
