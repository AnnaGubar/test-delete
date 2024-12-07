import React, { useEffect, useState } from "react";
import { getEmployeesList, url } from "./api/api";
import axios from "axios";

export const Fetch = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getEmployeesList();
      console.log("⭐ ~ data:", data);
      setEmployees(data);
    } catch (error) {
      console.warn(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addEmployee = async () => {
    const payload = {
      name: "New",
      salary: "0",
    };
    const response = await axios.post("employees", payload);
    // console.log("⭐ ~ response:", response);
    setData((prev) => [...prev, response.data]);
  };

  useEffect(() => {
    setData(employees);
  }, [employees]);

  const deleteEmployee = async (id) => {
    const response = await axios.delete(`employees/${id}`);
    console.log("⭐ ~ response:", response);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="counter">
      <ul>
        {isLoading ? (
          <div style={{ backgroundColor: "red" }}>Loading...</div>
        ) : (
          data.map((employee) => (
            <li
              key={employee.id}
              style={{ display: "flex", marginRight: "0 10px" }}
            >
              <p style={{ paddingRight: 20 }}>
                {employee.name}: {employee.salary}
              </p>
              <button
                onClick={() => deleteEmployee(employee.id)}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "transparent",
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
      <button onClick={addEmployee}>Add</button>
    </div>
  );
};
