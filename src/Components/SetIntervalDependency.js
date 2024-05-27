import React, { useEffect, useState } from 'react'

const SetIntervalDependency = () => {

   const [increment, setIncrement] = useState(0)

   useEffect(() => {                        
    const increase = setInterval(()=> {       
        setIncrement(prev => prev + 1);  
        console.log(increment)      
    }, 1000);                         
                                      
    if(increment === 3) {
        clearInterval(increase);
    }                              

    return ()=> {
      console.log("Component died")  
      clearInterval(increase);
    };           
   }, [increment])    //This will cause useEffect() to be executed every time the increment value updates


console.log("Rendering") 
  return ( 
    <div>
        <h3>SetInterval wrapped in UseEffect Hook wit Dependency Variable </h3>
        <p>This is interval counter:  {increment}</p>
    </div>
  )
}

export default SetIntervalDependency

/* Sequence:
On first render first fires console.log("Rendering") and the return value of functional Component (rendering to the DOM), 
then console.log(increment)= 0 from useEffect, then setIncrement from useEffect will fire causing rerendering of a component -> 
we are in the next render now, then console.log("Rendering") will show and return value of function component (Rerendeing to the DOM), 
then return value of useEffect ("Component died") (return in UseEffect comes from previous component render), 
then console.log from useEffect(increment) = updated to 1 , then setIncrement from useEffect will fire 
causing rerendering of the component.

*/