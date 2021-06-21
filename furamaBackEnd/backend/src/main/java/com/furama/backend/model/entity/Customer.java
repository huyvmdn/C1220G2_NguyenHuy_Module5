package com.furama.backend.model.entity;


import com.fasterxml.jackson.annotation.*;
import com.furama.backend.ultil.CustomerEmail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = Long.class)
public class Customer {

    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Pattern(regexp = "^KH-[0-9]{4}$", message = "KH-XXXX (X là số từ 0-9)")
    private String code;

    @NotBlank
    private String name;
    @NotBlank
    @Column(columnDefinition = "date")
    @Pattern(regexp = "^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$", message = "dd/mm/yyyy and 1900 - 2099")
    private String birthday;
    @NotNull
    @Column(columnDefinition = "Boolean")
    private boolean gender;
    @NotBlank
    @Pattern(regexp = "^([0-9]{9}|[0-9]{12})$", message = "9 số hoặc 12 số (X là số từ 0-9)")
    private String idCard;
    @NotBlank
    @Pattern(regexp = "^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$", message = "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx")
    private String phone;
    @Email
    @CustomerEmail
    private String email;
    private String address;

    @ManyToOne
    @JoinColumn(name = "customerType_id", nullable = false)
    private CustomerType customerType;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Contract> contracts;

    public Customer(@NotBlank @Pattern(regexp = "^KH-[0-9]{4}$", message = "KH-XXXX (X là số từ 0-9)") String code, @NotBlank String name, @NotBlank String birthday, @NotNull boolean gender, @NotBlank @Pattern(regexp = "^([0-9]{9}|[0-9]{12})$", message = "KH-XXXX (X là số từ 0-9)") String idCard, @NotBlank @Pattern(regexp = "^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$", message = "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx") String phone, @Email @NotEmpty String email, String address, CustomerType customerType) {
        this.code = code;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.idCard = idCard;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.customerType = customerType;
    }

    public Customer(Long id, @NotBlank @Pattern(regexp = "^KH-[0-9]{4}$", message = "KH-XXXX (X là số từ 0-9)") String code, @NotBlank String name, @NotBlank String birthday, @NotNull boolean gender, @NotBlank @Pattern(regexp = "^([0-9]{9}|[0-9]{12})$", message = "9 số hoặc 12 số (X là số từ 0-9)") String idCard, @NotBlank @Pattern(regexp = "^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$", message = "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx") String phone, String address, CustomerType customerType) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.idCard = idCard;
        this.phone = phone;
        this.address = address;
        this.customerType = customerType;
    }
}
