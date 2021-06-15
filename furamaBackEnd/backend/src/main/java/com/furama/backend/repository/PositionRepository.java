package com.furama.backend.repository;


import com.furama.backend.model.entity.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PositionRepository extends JpaRepository<Position,Long> {
    Position findByName(String role_admin);
}
