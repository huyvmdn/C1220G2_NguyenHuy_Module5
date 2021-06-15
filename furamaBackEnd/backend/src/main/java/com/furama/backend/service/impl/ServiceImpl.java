package com.furama.backend.service.impl;



import com.furama.backend.model.entity.EntityService;
import com.furama.backend.repository.ServiceRepository;
import com.furama.backend.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ServiceImpl implements ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public Iterable<EntityService> findAll() {
        return serviceRepository.findAll();
    }

    @Override
    public Page<EntityService> findAll(Pageable pageable) {
        return serviceRepository.findAll(pageable);
    }

    @Override
    public Optional<EntityService> findById(Long id) {
        return serviceRepository.findById(id);
    }


    @Override
    public EntityService save(EntityService service) {
        return serviceRepository.save(service);
    }

    @Override
    public void deleteById(Long idDelete) {
        serviceRepository.deleteById(idDelete);
    }
}
