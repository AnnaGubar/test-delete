import React from "react";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";

const Form = () => {
  return (
    <div>
      <ControlledForm />
      <UncontrolledForm />
    </div>
  );
};

export default Form;
