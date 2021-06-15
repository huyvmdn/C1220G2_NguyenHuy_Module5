package com.furama.backend.service.impl;


import com.furama.backend.model.entity.CustomerType;
import com.furama.backend.repository.CustomerTypeRepository;
import com.furama.backend.service.CustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerTypeServiceImpl  implements CustomerTypeService {

    @Autowired
    private CustomerTypeRepository customerTypeRepository;

    @Override
    public Iterable<CustomerType> findAll() {
        return customerTypeRepository.findAll();
    }

    @Override
    public Page<CustomerType> findAll(Pageable pageable) {
        return customerTypeRepository.findAll(pageable);
    }

    @Override
    public Optional<CustomerType> findById(Long id) {
        return customerTypeRepository.findById(id);
    }

    @Override
    public CustomerType save(CustomerType customerType) {
        return customerTypeRepository.save(customerType);
    }

    @Override
    public void deleteById(Long idDelete) {
        customerTypeRepository.deleteById(idDelete);
    }
}
