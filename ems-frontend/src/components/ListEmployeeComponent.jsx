import React, { use, useEffect, useState } from "react";
import { deleteEmployee, listEmoloyees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firestName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: 2,
      firestName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: 3,
      firestName: "John",
      lastName: "Smith",
      email: "johnsmith@gmail.com",
    },
    {
      id: 4,
      firestName: "Jane",
      lastName: "Smith",
      email: "janesmith@gmail.com",
    },
  ];

  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmoloyees()
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log("Delete employee with id: " + id);
    deleteEmployee(id)
      .then((response) => getAllEmployees())
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => removeEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
