import { memo } from "react";

const SecondChildHook = memo(() => {
  console.log("SecondChildHook");
  return <div>SecondChildHook</div>;
});

export default SecondChildHook;
