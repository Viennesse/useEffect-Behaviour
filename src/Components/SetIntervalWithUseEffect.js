import React, { useEffect, useState } from 'react'

const SetIntervalWithUseEffect = () => {

    const [stan, setStan] = useState(0)

   useEffect(() => {                        
    const interwal = setInterval(()=> {    
        setStan(prev => prev +1)           
    //console.log(state) // 0              
  }, 1000);   

    return () => {
      console.log("Component died")
      clearInterval(interwal)
    }}, []);

/* If we use setInterval only, without wrapping useEffect Hook, then the interval will be a crazy interval, that shows big numbers.
This is because setInterval gets called every time the compoment renders and it renders on every state change.
And when does the state change? When the interval callback is called.
Console.log inside interwal function will show "0" every second, because useEffects runs only after first render(dependency array []).
Sequence:  component renders for the first time and return of the functional coponent fires (rendering to the DOM), then
useEffect fires, where setInterval sets state causing rerendering -> we are in the next render.
Return in useEffect will fire when component unmounts (e.g. user leaves page or when we save the changes made in the code)
*/

  return ( 
    <div>
        <h3>SetInterval wrapped in UseEffect Hook</h3>
        <p>To jest licznik interwalu: {stan}</p>
    </div>
  )
}

export default SetIntervalWithUseEffect


/*
So put setInterval in useEffect hook if you don't want to have state called every time the component renders.
Cleanup Functon, that clear Interval in return:
If we dont clear the Interval whats happening: The component is destroyed, but the interval 
still runs! And it's trying to set a state that doesn't exist anymore.
Now imagine the component is created and destroyed again and again. You could get dozens of setIntervals running!
Taken together, this could seriously slow down your app.
*/


