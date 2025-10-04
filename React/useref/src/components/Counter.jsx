import { useState,useRef,useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;  
  });

  return (
    <p>
      Now: {count}, Before: {prevCount.current}
      <br/>
      <button className="btn btn-success"onClick={() => setCount(count + 1)}>+</button>
    </p>
  );
}
export default Counter;
