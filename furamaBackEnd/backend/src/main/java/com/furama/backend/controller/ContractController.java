package com.furama.backend.controller;


import com.furama.backend.model.entity.Contract;
import com.furama.backend.model.entity.ContractDetail;
import com.furama.backend.model.entity.Customer;
import com.furama.backend.service.ContractDetailService;
import com.furama.backend.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ContractController {

    @Autowired
    private ContractService contractService;

    @Autowired
    private ContractDetailService contractDetailService;

    @GetMapping("/contract")
    public ResponseEntity<Iterable<Contract>> findAllBlog() {
        List<Contract> contracts = (List<Contract>) contractService.findAll();
        if (contracts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(contracts,HttpStatus.OK);
    }


    @PostMapping("/contract/save")
    public ResponseEntity<Contract> save(@RequestBody Contract contract) {
        return new ResponseEntity<>(contractService.save(contract), HttpStatus.CREATED);
    }

    @PostMapping("/contractDetail/save")
    public ResponseEntity<ContractDetail> save(@RequestBody ContractDetail contractDetail) {
        return new ResponseEntity<>(contractDetailService.save(contractDetail), HttpStatus.CREATED);
    }
}
