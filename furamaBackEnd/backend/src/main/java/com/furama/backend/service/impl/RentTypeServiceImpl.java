package com.furama.backend.service.impl;

import com.furama.backend.model.entity.RentType;
import com.furama.backend.repository.RentTypeRepository;
import com.furama.backend.service.RentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RentTypeServiceImpl implements RentTypeService {

    @Autowired
    RentTypeRepository rentTypeRepository;

    @Override
    public Iterable<RentType> findAll() {
        return rentTypeRepository.findAll();
    }

    @Override
    public Page<RentType> findAll(Pageable pageable) {
        return rentTypeRepository.findAll(pageable);
    }

    @Override
    public Optional<RentType> findById(Long id) {
        return rentTypeRepository.findById(id);
    }

    @Override
    public RentType save(RentType rentType) {
        return rentTypeRepository.save(rentType);
    }

    @Override
    public void deleteById(Long idDelete) {
        rentTypeRepository.deleteById(idDelete);
    }

}
