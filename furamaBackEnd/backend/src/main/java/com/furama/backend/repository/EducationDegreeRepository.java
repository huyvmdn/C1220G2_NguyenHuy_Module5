package com.furama.backend.repository;



import com.furama.backend.model.entity.EducationDegree;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EducationDegreeRepository extends JpaRepository<EducationDegree,Long> {
    EducationDegree findByName(String string);
}
