package com.metacube.empmgmt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Monil on 9/28/2016.
 */
@Controller
@RequestMapping("/page/emp/")
public class EmployeePageController {

    @RequestMapping(value="/list", method = RequestMethod.GET)
    public String listPage() {
        return "list";
    }
}
