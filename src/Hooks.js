import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import UnmountComponent from "./UnmountComponent";
import ChildHook from "./ChildHook";
import SecondChildHook from "./SecondChildHook";

export function Hooks() {
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    }
    if (action.type === "decrement") {
      return { count: state.count - 1 };
    }
    if (action.type === "reset") {
      return { count: 0 };
    }
  };

  const [value, dispatch] = useReducer(reducer, { count: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // монтируется один раз в начале
  useEffect(() => {
    console.log("useEffect - componentDidMount ");
  }, []);

  // монтируется при любом изменении
  // useEffect(() => {
  //   console.log("useEffect - componentDidMount ");
  // });

  // ререндерит при каждом измении значения value
  useEffect(() => {
    console.log("useEffect - componentDidUpdate ");
  }, [value]);

  const handleClick = (type) => {
    dispatch(type);
  };

  const handleClickUnmountedComp = () => {
    setIsMounted(!isMounted);
  };

  const mainRef = useRef();
  const handleFocus = () => {
    console.log(mainRef);
    console.log(mainRef.current);
    console.log(mainRef.current.value);
    mainRef.current.focus();
  };

  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const memoizedList = useMemo(() => {
    return list;
  }, [list]);

  const handleListChange = () => {
    setList([...list, 6]);
  };

  return (
    <div>
      <div className="counter">
        <SecondChildHook />
        {list.map((item, index) => {
          return <ChildHook key={index} item={item} />;
        })}
        <button onClick={() => setList([...list, 10])}>Click</button>
      </div>

      <div className="counter">
        {memoizedList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={handleListChange}>Add memo card</button>
      </div>

      <div className="counter">
        <p>{value.count}</p>
        <button
          onClick={() => {
            handleClick({ type: "increment" });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            handleClick({ type: "decrement" });
          }}
        >
          Minus
        </button>
        <button
          onClick={() => {
            handleClick({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>

      <div className="counter">
        <button onClick={handleClickUnmountedComp}>UnmountedComp</button>
        {isMounted ? <UnmountComponent /> : null}
      </div>

      <div className="counter">
        <input ref={mainRef} />
        <button onClick={handleFocus}>Focus me</button>
      </div>
    </div>
  );
}
