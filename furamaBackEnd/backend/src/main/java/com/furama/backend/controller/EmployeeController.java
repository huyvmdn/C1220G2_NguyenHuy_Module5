package com.furama.backend.controller;


import com.furama.backend.model.entity.*;
import com.furama.backend.service.DivisionService;
import com.furama.backend.service.EducationDegreesService;
import com.furama.backend.service.EmployeeService;
import com.furama.backend.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EducationDegreesService educationDegreesService;

    @Autowired
    private DivisionService divisionService;

    @Autowired
    private PositionService positionService;

    @GetMapping("/employee")
    public ResponseEntity<Iterable<Employee>> employee() {
        List<Employee> employees = (List<Employee>) employeeService.findAll();
        if (employees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }

    @GetMapping("/educationDegree")
    public ResponseEntity<Iterable<EducationDegree>> educationDegree() {
        List<EducationDegree> educationDegrees = (List<EducationDegree>) educationDegreesService.findAll();
        if (educationDegrees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(educationDegrees,HttpStatus.OK);
    }

    @GetMapping("/division")
    public ResponseEntity<Iterable<Division>> division() {
        List<Division> divisions = (List<Division>) divisionService.findAll();
        if (divisions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(divisions,HttpStatus.OK);
    }
    @GetMapping("/position")
    public ResponseEntity<Iterable<Position>> position() {
        List<Position> positions = (List<Position>) positionService.findAll();
        if (positions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(positions,HttpStatus.OK);
    }

}
