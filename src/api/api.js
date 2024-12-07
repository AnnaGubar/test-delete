import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";
export const url = axios.defaults.baseURL;

export const getEmployeesList = async () => {
  const employeesList = await axios.get("employees");
  return employeesList.data;
};

export const addEmployee = async (payload) => {
  const employee = await axios.post("employees", payload);
  return employee.data;
};
