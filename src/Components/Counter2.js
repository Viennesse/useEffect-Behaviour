import React, { useEffect, useState } from 'react'

const Counter2 = () => {        // This counter is immediately added to the DOM

const [count2, setCount2] = useState(0);

useEffect(()=> {
  console.log(`The count has updateded: ${count2}`); // Po zaladowaniu strony pokaze sie od razu, bo komponent
    return ()=> {                                                            // ten jest od razu dodany do DOM.
    console.log(`We are in the Cleanup. Our count is now: ${count2}`);
  }         
}, [count2])                                        


return ( 
    <div>        
        <h3>Counter 2 - useEffect and Component directly placed
         in the DOM, no conditional rendering: </h3>                             
        <p>Current count: {count2}</p>
        <button onClick={()=> setCount2(count2 + 1)}>Increment the count +1</button>
    </div>
  )
}

export default Counter2