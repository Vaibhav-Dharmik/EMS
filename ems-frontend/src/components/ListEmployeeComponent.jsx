import React from "react";

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

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firestName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
