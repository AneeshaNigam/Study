import { useRef } from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
function App(){
    const inputRef= useRef(null);
    function reff(){
        inputRef.current.focus();
    }
    return <div style={{margin:90}}>
    <br/>
    <input className="form-control" ref={inputRef} type="text" placeholder="click the button to focus on me"/>
    <br/>
    <button className="btn btn-primary"onClick={reff}>Focus on input</button>
    <br/>
    <br/>
    <Counter/>
    <br/>
    <Timer/>
    </div>
}
export default App;