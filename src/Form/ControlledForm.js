import { useState } from "react";
import { debounce } from "lodash";
import CustomSelect from "./CustomSelect";

const ControllrdForm = () => {
  const [value, setValue] = useState({
    name: "-",
    email: "-",
    checkbox: false,
    radio: "-",
    select: "-",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = debounce((event) => {
    const name = event.target.value;
    setValue((prevState) => ({ ...prevState, name }));
  }, 1000);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  const handleCheckboxChange = (event) => {
    const checkbox = event.target.checked;
    setValue((prevState) => ({ ...prevState, checkbox }));
  };

  const handleRadioChange = (event) => {
    const radio = event.target.name;
    setValue((prevState) => ({ ...prevState, radio }));
  };

  return (
    <div className="counter">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          {" "}
          <label htmlFor="firstName" style={{ marginRight: 10 }}>
            Name
          </label>
          <input
            onChange={handleNameChange}
            alue={value.name}
            type="text"
            name="firstName"
            id="firstName"
            style={{ width: 150 }}
          />
        </div>
        <div style={{ display: "flex", padding: "10px 0" }}>
          {" "}
          <label htmlFor="email" style={{ margin: 0, marginRight: 10 }}>
            Email
          </label>
          <input
            onChange={handleEmailChange}
            alue={value.email}
            type="email"
            name="email"
            id="email"
            style={{ width: 150 }}
          />{" "}
        </div>

        <div style={{ display: "flex" }}>
          <label htmlFor="checkbox" style={{ margin: 0, marginRight: 10 }}>
            checkbox
          </label>
          <input
            onChange={handleCheckboxChange}
            value={value.checkbox}
            checked={value.checkbox}
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
        </div>

        <div style={{ display: "flex" }}>
          <label htmlFor="radio1" style={{ margin: 0, marginRight: 10 }}>
            radio 1
          </label>
          <input
            onChange={handleRadioChange}
            checked={value.radio === "radio1"}
            type="radio"
            name="radio1"
            id="radio1"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="radio2" style={{ margin: 0, marginRight: 10 }}>
            radio 2
          </label>
          <input
            onChange={handleRadioChange}
            checked={value.radio === "radio2"}
            type="radio"
            name="radio2"
            id="radio2"
          />
        </div>

        <CustomSelect value={value} setValue={setValue} />
      </form>
      <div>
        <p>{value.name}</p>
        <p>{value.email}</p>
        <p>{value.checkbox.toString()}</p>
        <p>{value.radio.toString()}</p>
        <p>{value.select}</p>
      </div>
      <button type="submit">Submit form</button>
    </div>
  );
};

export default ControllrdForm;
