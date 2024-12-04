import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment} type="button">
        increment +
      </button>
      <button onClick={decrement} type="button">
        decrement -
      </button>
    </div>
  );
};
