import { useMutation, useQuery } from "@tanstack/react-query";
import { getEmployeesList, addEmployee } from "./api/api";

const FetchQuery = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["employeesList"],
    queryFn: getEmployeesList,
  });

  const payload = {
    name: "FetchQuery",
    salary: "1565",
  };

  const { mutateAsync } = useMutation({
    mutationFn: (payload) => addEmployee(payload),
  });

  const addNewEmployee = async () => {
    try {
      await mutateAsync(payload);
      await refetch();
    } catch (error) {}
  };

  return (
    <div className="counter">
      <ul>
        {isFetching ? (
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
      <button onClick={addNewEmployee}>Add</button>
    </div>
  );
};

export default FetchQuery;
