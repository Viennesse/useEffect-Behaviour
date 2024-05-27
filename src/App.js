
import Counter1 from "./Components/Counter1.js"
import { useState } from "react";
import Counter2 from "./Components/Counter2";
import UseEffectWithoutFunction from "./Components/UseEffectWithoutFunction";
import UseEffectWithFunctionHook from "./Components/UseEffectWithFunctionHook.js"
import SetIntervalWithUseEffect from "./Components/SetIntervalWithUseEffect.js";
import SetIntervalDependency from "./Components/SetIntervalDependency.js";



function App() {

  const [showBlok, setShowBlok] = useState(false);

  return (
    <div className="App">
      <UseEffectWithFunctionHook />
      <hr/>

      <UseEffectWithoutFunction />
      <hr/>

      <h3>Counter 1 - useEffect + Component conditionally rendered to the DOM: </h3>
      <button onClick={()=> {setShowBlok(!showBlok)}}>
        {showBlok? "Hide something" : "Show something"}
      </button>
      {showBlok && <Counter1 />}     {/* <Counter1 /> jest conditionally rendered into the DOM  */}
      <hr/>   

      <Counter2 />

      <SetIntervalWithUseEffect />
      <SetIntervalDependency />

    </div>
  );
}

export default App;
