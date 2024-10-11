package com.phegondev.auth2Peoject.model;

import com.phegondev.auth2Peoject.enums.AuthProvider;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String  name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private AuthProvider authProvide;

}
