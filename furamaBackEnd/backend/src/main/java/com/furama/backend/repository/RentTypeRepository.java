package com.furama.backend.repository;



import com.furama.backend.model.entity.RentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RentTypeRepository extends JpaRepository<RentType,Long> {
    RentType findByName(String string);
}
