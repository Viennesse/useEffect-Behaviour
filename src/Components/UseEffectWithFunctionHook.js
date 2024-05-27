import { useState } from "react"
import usePreviousHook from "./usePreviousHook.js";



export default function UseEffectWithFunctionHook () {

    const [licznik, setLicznik] = useState(0) 
    const prevCount = usePreviousHook(licznik);   // custom hook "usePreviousHook"

    return(

    <div>
        <h3>This is useEffect from custom Hook: "usePreviousHook":</h3>
        <p>This is count: <strong>{licznik}</strong> , and this is ref.current: <strong>{prevCount}</strong></p>
        <button onClick={()=> setLicznik(prev => prev + 1)} > Increase counter +1 </button>
    </div>
    )
}


