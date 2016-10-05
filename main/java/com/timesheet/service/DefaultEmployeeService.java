package com.metacube.empmgmt.service;

import com.metacube.empmgmt.dao.EmployeeDAO;
import com.metacube.empmgmt.dao.model.EmployeeModel;
import com.metacube.empmgmt.exception.SystemException;
import com.metacube.empmgmt.service.dto.EmployeeDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Monil on 9/28/2016.
 */
@Service("defaultEmployeeService")
@Transactional
public class DefaultEmployeeService implements EmployeeService {

    @Autowired
    @Qualifier("employeeDAO")
    private EmployeeDAO employeeDAO;


    @Override
    public void createEmployee(EmployeeDTO employeeDTO) throws SystemException {
        EmployeeModel employeeModel = new EmployeeModel();
        populate(employeeModel, employeeDTO);
        employeeDAO.createEmployee(employeeModel);

    }

    protected void populate(EmployeeModel employeeModel, EmployeeDTO employeeDTO) {
        BeanUtils.copyProperties(employeeDTO, employeeModel);
    }

    protected void populate(EmployeeDTO employeeDTO, EmployeeModel employeeModel) {
        BeanUtils.copyProperties(employeeModel, employeeDTO);
    }

    @Override
    @Transactional
    public List<EmployeeDTO> listEmployees() throws SystemException {
        List<EmployeeDTO> employeeDTOs = new ArrayList<EmployeeDTO>();

        List<EmployeeModel> employeeModels = employeeDAO.listEmployees();
        if (employeeModels == null) {
            return employeeDTOs;
        }

        for(EmployeeModel employeeModel : employeeModels) {
            EmployeeDTO employeeDTO = new EmployeeDTO();
            populate(employeeDTO, employeeModel);
            employeeDTOs.add(employeeDTO);
        }

        return employeeDTOs;

    }

    @Override
    public EmployeeDTO getEmployee(EmployeeDTO employeeDTO) throws SystemException {
        EmployeeModel employeeModel = new EmployeeModel();
        populate(employeeModel, employeeDTO);
        employeeDTO = new EmployeeDTO();
        populate(employeeDTO, employeeDAO.getEmployee(employeeModel));
        return employeeDTO;
    }

    @Override
    public void updateEmployee(EmployeeDTO employeeDTO) throws SystemException {
        EmployeeModel employeeModel = new EmployeeModel();
        populate(employeeModel, employeeDTO);
        employeeDAO.updateEmployee(employeeModel);
    }

    @Override
    public void deleteEmployee(EmployeeDTO employeeDTO) {
        EmployeeModel employeeModel = new EmployeeModel();
        populate(employeeModel, employeeDTO);
        employeeDAO.deleteEmployee(employeeModel);
    }
}
