import { useState, useRef, useEffect, useContext } from "react";
import { ReducerContext } from "../contexts";

const About = () => {
  const [count, setCount] = useState(0);
  const [useEffectCount, setUseEffectCount] = useState(0);
  const inputEl = useRef();

  const { state, dispatch } = useContext(ReducerContext);

  const handleClick = () => {
    setCount((value) => value + 1);
  };

  const handleSecondButtonClick = () => {
    inputEl.current.focus();
  };

  useEffect(() => {
    console.log("useEffect - count: ", count);

    setUseEffectCount(count);

    return () => {
      console.log("useEffect cleanup");
    };
  }, [count]);

  return (
    <>
      <h2>About</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <button onClick={handleClick}>Click me!</button> Clicked {count}{" "}
          times. (useEffectCount: {useEffectCount})
        </div>
        <div>
          <input ref={inputEl} type="text" />
          <button onClick={handleSecondButtonClick}>Focus the input</button>
        </div>
        <div>
          ReducerContext count: {state.count}
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
      </div>
    </>
  );
};

export { About };
