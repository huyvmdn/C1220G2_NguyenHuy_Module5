package com.furama.backend.repository;


import com.furama.backend.model.entity.AttachService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttachServiceRepository extends JpaRepository<AttachService,Long> {
    AttachService findByName(String string);
}
