package com.furama.backend.model.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@RequiredArgsConstructor(staticName = "name")
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerType_id")
    private Long id;
    private String name;

    @OneToMany(mappedBy = "customerType", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<Customer> customers;

    public CustomerType(String name) {
        this.name = name;
    }

    public CustomerType(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
