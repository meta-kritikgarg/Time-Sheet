package com.metacube.empmgmt.dao;

import com.metacube.empmgmt.dao.model.EmployeeModel;
import com.metacube.empmgmt.exception.SystemException;

import java.util.List;

/**
 * Created by Monil on 9/28/2016.
 */
public interface EmployeeDAO {

    void createEmployee(EmployeeModel employeeModel) throws SystemException, SystemException;

    List<EmployeeModel> listEmployees() throws SystemException;

    EmployeeModel getEmployee(EmployeeModel employeeModel) throws SystemException;

    void updateEmployee(EmployeeModel employeeModel) throws SystemException;

    void deleteEmployee(EmployeeModel employeeModel);
}
