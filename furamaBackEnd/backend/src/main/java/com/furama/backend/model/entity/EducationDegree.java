package com.furama.backend.model.entity;

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
public class EducationDegree {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "educationDegree_id")
    private Long id;
    private String name;

    @OneToMany(mappedBy = "educationDegree", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Employee> employees;

    public EducationDegree(String name) {
        this.name = name;
    }

    public EducationDegree(Long id) {
        this.id = id;
    }
}
