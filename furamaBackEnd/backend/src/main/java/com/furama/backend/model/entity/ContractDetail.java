package com.furama.backend.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.NumberFormat;

import javax.persistence.*;
import javax.validation.constraints.Min;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContractDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contractDetail_id")
    private Long id;
    @Min(value = 0)
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    private int quatity;


    @ManyToOne
    @JoinColumn(name="contract_id", nullable=false)
    @JsonBackReference
    private Contract contract;

    @ManyToOne
    @JoinColumn(name="attachService_id", nullable=false)
    @JsonBackReference
    private AttachService attachService;

}
