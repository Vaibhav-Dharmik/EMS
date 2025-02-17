package com.fullstackproject.ems.mapper;


import com.fullstackproject.ems.dto.EmployeeDto;
import com.fullstackproject.ems.entity.Employee;

public class EmployeeMapper {

    //    Mapping Employee to EmployeeDto
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    //    Mapping EmployeeDto to Employee
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }

}