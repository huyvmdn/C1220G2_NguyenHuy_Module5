package com.furama.backend.controller;

import com.furama.backend.model.entity.Employee;
import com.furama.backend.model.entity.EntityService;
import com.furama.backend.model.entity.RentType;
import com.furama.backend.service.RentTypeService;
import com.furama.backend.service.ServiceService;
import com.furama.backend.service.ServiceTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @Autowired
    private ServiceTypeService serviceTypeService;

    @Autowired
    private RentTypeService rentTypeService;

    @GetMapping("/service")
    public ResponseEntity<Iterable<EntityService>> service() {
        List<EntityService> employees = (List<EntityService>) serviceService.findAll();
        if (employees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }

    @GetMapping("/serviceType")
    public ResponseEntity<Iterable<EntityService>> serviceType() {
        List<EntityService> employees = (List<EntityService>) serviceService.findAll();
        if (employees.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }

    @GetMapping("/rentType")
    public ResponseEntity<Iterable<RentType>> rentType() {
        List<RentType> rentTypes = (List<RentType>) rentTypeService.findAll();
        if (rentTypes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(rentTypes,HttpStatus.OK);
    }

}
