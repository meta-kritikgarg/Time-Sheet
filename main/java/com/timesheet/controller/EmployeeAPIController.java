package com.metacube.empmgmt.controller;

import com.metacube.empmgmt.exception.SystemException;
import com.metacube.empmgmt.facade.EmployeeFacade;
import com.metacube.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Monil on 9/28/2016.
 */
@RestController
@RequestMapping("/api/v1/emp/")
public class EmployeeAPIController {

    @Autowired
    @Qualifier("employeeFacade")
    private EmployeeFacade employeeFacade;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public Response getEmployeeList() {
        try {
            return new Response(employeeFacade.getAllEmployees());
        } catch (SystemException e) {
            e.printStackTrace();
            return new Response(-1, e.getMessage());
        }
    }


    public EmployeeFacade getEmployeeFacade() {
        return employeeFacade;
    }

    public void setEmployeeFacade(EmployeeFacade employeeFacade) {
        this.employeeFacade = employeeFacade;
    }
}
