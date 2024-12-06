import { useRef } from "react";

const UncontrolledForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formRef.current.firstName.value;
    const email = formRef.current.email.value;

    console.log({ name, email });

    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="counter">
      <label htmlFor="firstName">Name</label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <button type="submit">Submit form</button>
    </form>
  );
};

export default UncontrolledForm;
