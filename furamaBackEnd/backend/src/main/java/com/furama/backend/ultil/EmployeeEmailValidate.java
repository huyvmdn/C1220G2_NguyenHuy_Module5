package com.furama.backend.ultil;


import com.furama.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class EmployeeEmailValidate implements ConstraintValidator<EmployeeEmail, String> {

    @Autowired
    private EmployeeService employeeService;


    public void initialize(EmployeeEmail constraint) {
    }

    public boolean isValid(String obj, ConstraintValidatorContext context) {
        return obj != null && !employeeService.checkExistUser(obj);

    }
}
