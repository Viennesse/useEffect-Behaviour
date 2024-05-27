import { useEffect, useRef } from "react";

const usePreviousHook = (value) => {
    const ref = useRef();           
    console.log(ref.current); // first render: undefined
 
    useEffect(() => {           
        ref.current = value;
        console.log(ref.current);  //first render:  0
    }, [value]);

    return ref.current;  
    /*Function must return ref.current in order to write its value to the DOM.
    On first render return value = undefined, because ref.current doesn`t exist yet and function 
    returns first its return value*/
}

export default usePreviousHook



