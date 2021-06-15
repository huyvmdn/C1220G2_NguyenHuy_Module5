package com.furama.backend.repository;


import com.furama.backend.model.entity.EntityService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<EntityService,Long> {
}
