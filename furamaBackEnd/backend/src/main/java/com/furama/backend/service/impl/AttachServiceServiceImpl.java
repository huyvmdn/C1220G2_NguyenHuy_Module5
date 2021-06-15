package com.furama.backend.service.impl;


import com.furama.backend.model.entity.AttachService;
import com.furama.backend.repository.AttachServiceRepository;
import com.furama.backend.service.AttachServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AttachServiceServiceImpl implements AttachServiceService {

    @Autowired
    private AttachServiceRepository attachServiceRepository;

    @Override
    public Iterable<AttachService> findAll() {
        return attachServiceRepository.findAll();
    }

    @Override
    public Page<AttachService> findAll(Pageable pageable) {
        return attachServiceRepository.findAll(pageable);
    }

    @Override
    public Optional<AttachService> findById(Long id) {
        return attachServiceRepository.findById(id);
    }

    @Override
    public AttachService save(AttachService attachService) {
        return attachServiceRepository.save(attachService);
    }

    @Override
    public void deleteById(Long idDelete) {
        attachServiceRepository.deleteById(idDelete);
    }
}
