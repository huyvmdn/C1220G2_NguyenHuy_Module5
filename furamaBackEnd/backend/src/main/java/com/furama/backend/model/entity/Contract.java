package com.furama.backend.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contract_id")
    private Long id;
    @NotBlank
    @Column(columnDefinition = "date")
    @Pattern(regexp = "^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$", message = "dd/mm/yyyy ")
    private String startDate;
    @Pattern(regexp = "^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$", message = "dd/mm/yyyy ")
    @Column(columnDefinition = "date")
    private String endDate;
    @Min(value = 0)
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    private Double deposit;
    @Min(value = 0)
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    private Double totalMoney;

    @ManyToOne
    @JoinColumn(name="employee_id", nullable=false)
    private Employee employee;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    @JsonManagedReference
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="entityService_id", nullable=false)
    private EntityService entityService;


    @OneToMany(mappedBy = "contract", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ContractDetail> contractDetails;

    public Contract(@NotBlank String startDate, String endDate, @Min(value = 0) Double deposit, @Min(value = 0) Double totalMoney, Employee employee, Customer customer, List<ContractDetail> contractDetails) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.deposit = deposit;
        this.totalMoney = totalMoney;
        this.employee = employee;
        this.customer = customer;
        this.contractDetails = contractDetails;
    }

    public Contract(@NotBlank String startDate, String endDate, @Min(value = 0) Double deposit, @Min(value = 0) Double totalMoney, Employee employee, Customer customer) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.deposit = deposit;
        this.totalMoney = totalMoney;
        this.employee = employee;
        this.customer = customer;
    }

    public Contract(@NotBlank String startDate, String endDate, @Min(value = 0) Double deposit, @Min(value = 0) Double totalMoney, Employee employee, Customer customer, EntityService entityService) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.deposit = deposit;
        this.totalMoney = totalMoney;
        this.employee = employee;
        this.customer = customer;
        this.entityService = entityService;
    }


}
