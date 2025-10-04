import { useState, useRef, useEffect } from "react";
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      <button className="btn btn-primary" onClick={startTimer}>
        Start
      </button>
      <br />
      <br />
      <button className="btn btn-primary" onClick={stopTimer}>
        Stop
      </button>
    </>
  );
}

export default Timer;
