package com.furama.backend.repository;



import com.furama.backend.model.entity.ContractDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ContractDetailRepository extends JpaRepository<ContractDetail,Long> {
}
