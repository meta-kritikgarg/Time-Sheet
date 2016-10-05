package com.metacube.empmgmt.service;

import com.metacube.empmgmt.exception.SystemException;
import com.metacube.empmgmt.service.dto.EmployeeDTO;

import java.util.List;

/**
 * Created by Monil on 9/28/2016.
 */
public interface EmployeeService {

    void createEmployee(EmployeeDTO employeeDTO) throws SystemException;

    List<EmployeeDTO> listEmployees() throws SystemException;

    EmployeeDTO getEmployee(EmployeeDTO employeeDTO) throws SystemException;

    void updateEmployee(EmployeeDTO employeeDTO) throws SystemException;

    void deleteEmployee(EmployeeDTO employeeDTO);
}
