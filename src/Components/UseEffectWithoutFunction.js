import { useState, useEffect, useRef} from "react";

// !----- The useEffect Hook is invoked only after the component from which it is called has been rendered ------- !!!!!
// ------! Essentially, the return value of the component must be executed first  !!!!! ------- 

function UseEffectWithoutFunction () {

    const [licznik2, setLicznik2] = useState(0);
    const ref2 = useRef(); 
    console.log(ref2.current) // first render: undefined

    useEffect(() => {
      ref2.current = licznik2;
      console.log(ref2.current); // first render:  0
    }, [licznik2]); 

    return (
      <div>   {/* ref2.current underneath returns value from previous rendering */}
        <h2>This is only UseEffect without Wrapping Custom Hook Function</h2> 
        <p> This is count: <strong>{licznik2}</strong> , and this is Ref: <strong>{ref2.current}</strong></p>
        <button onClick={() => setLicznik2((prev) => prev + 1)}> Increase +1</button>
      </div>
    );
  }

  export default UseEffectWithoutFunction