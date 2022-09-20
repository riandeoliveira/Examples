import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

export const ReactHooks = () => {
  /** @useState */
  const [count, setCount] = useState<number>(0); // dynamic data that is rendered on the screen

  const increment = () => setCount((state) => state + 1); // count = 0 -> count = 1

  /** @useEffect */
  useEffect(() => {
    console.log("The component was rendered for the first time!"); // runs when the component is first rendered
  }, []);

  useEffect(() => {
    console.log(
      "The component was rendered because the value of count was changed!"
    ); // runs when its dependency array changes
  }, [count]);

  /** @useRef */
  const inputRef = useRef(null); // allows accessing an element imperatively

  const handleChange = () => console.log(inputRef.current); // <input type="text" title="ref">…</input>

  /** @useReducer */
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0); // works the same as useState. It is used for more complex states

  /** @useMemo */
  const slowFunction = () => {
    for (let i = 0; i <= 5000; i++) {
      console.log(i); // <- VERY SLOW CODE
    }
  };

  // const slow = slowFunction(); // BAD: this will always run when the component is rendered

  // used to resolve performance issues
  useMemo(() => {
    slowFunction(); // GOOD: only runs when count value is changed
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "480px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span>Counter: {count}</span>
        <Button onClick={increment}>Click me</Button>
      </div>
      <Form.Control
        type="text"
        title="ref"
        ref={inputRef}
        onChange={handleChange}
      />
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span>Value: {state}</span>
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </Button>
      </div>
    </div>
  );
};
