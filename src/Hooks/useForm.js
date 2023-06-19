import { useState } from "react"


export const useForm = (inicial = {}) => {
  const [values,Setvalues] = useState(inicial);

  const a = ({target})=>{
    Setvalues({
        ...values,
        [target.name]:target.value

    })
}

return [values,a]
}
