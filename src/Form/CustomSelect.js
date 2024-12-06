const CustomSelect = ({ value, setValue }) => {
  const selectOptions = [
    { id: 1, value: "option 1" },
    { id: 2, value: "option 2" },
    { id: 3, value: "option 3" },
    { id: 4, value: "option 4" },
    { id: 5, value: "option 5" },
  ];

  const handleSelectChange = (event) => {
    const select = event.target.value;
    setValue((prevState) => ({ ...prevState, select }));
  };

  return (
    <div style={{ display: "flex" }}>
      <label htmlFor="select" style={{ margin: 0, marginRight: 10 }}>
        Select
      </label>
      <select onChange={handleSelectChange} name="select" id="select">
        {selectOptions.map((option) => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
