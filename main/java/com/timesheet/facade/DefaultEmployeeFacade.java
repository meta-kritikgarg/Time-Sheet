package com.metacube.empmgmt.facade;

import com.metacube.empmgmt.exception.SystemException;
import com.metacube.empmgmt.service.EmployeeService;
import com.metacube.empmgmt.service.dto.EmployeeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Monil on 9/28/2016.
 */
@Component("defaultEmployeeFacade")
public class DefaultEmployeeFacade implements EmployeeFacade {

    @Autowired
    @Qualifier("employeeService")
    private EmployeeService employeeService;

    public EmployeeService getEmployeeService() {
        return employeeService;
    }

    public void setEmployeeService(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Override
    public void createEmployee(EmployeeDTO employeeDTO) throws SystemException {
        employeeService.createEmployee(employeeDTO);
    }

    @Override
    public void updateEmployee(EmployeeDTO employeeDTO) throws SystemException {
        employeeService.updateEmployee(employeeDTO);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() throws SystemException {
        return employeeService.listEmployees();
    }

    @Override
    public EmployeeDTO getEmployeeById(Integer id) throws SystemException {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setId(id);
        return employeeService.getEmployee(employeeDTO);
    }

    @Override
    public EmployeeDTO getEmployeeByEmail(String email) throws SystemException {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setEmailId(email);
        return employeeService.getEmployee(employeeDTO);
    }

    @Override
    public void deleteEmployeeById(int id) throws SystemException {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setId(id);
        employeeService.deleteEmployee(employeeDTO);
    }
}
