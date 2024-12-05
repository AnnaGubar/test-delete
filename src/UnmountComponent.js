import { useEffect } from "react";

const UnmountComponent = () => {
  useEffect(() => {
    return () => {
      console.log("useEffect - componentWillUnmount ");
    };
  }, []);

  return <div>UnmountComponent</div>;
};

export default UnmountComponent;
