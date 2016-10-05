package com.metacube.empmgmt.facade;

import com.metacube.empmgmt.exception.SystemException;
import com.metacube.empmgmt.service.dto.EmployeeDTO;

import java.util.List;

/**
 * Created by Monil on 9/28/2016.
 */
public interface EmployeeFacade {

    void createEmployee(EmployeeDTO employeeDTO) throws SystemException;
    void updateEmployee(EmployeeDTO employeeDTO) throws SystemException;

    List<EmployeeDTO> getAllEmployees() throws SystemException;
    EmployeeDTO getEmployeeById(Integer id) throws SystemException;
    EmployeeDTO getEmployeeByEmail(String Email) throws SystemException;

    void deleteEmployeeById(int id) throws SystemException;

}
