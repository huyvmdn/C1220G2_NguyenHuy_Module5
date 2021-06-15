//package com.furama.backend.service.impl;
//
//import com.furama.backend.model.Role;
//import com.furama.backend.repository.RoleRepository;
//import com.furama.backend.service.RoleService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class RoleServiceImpl implements RoleService {
//
//    @Autowired
//    private RoleRepository roleRepository;
//    @Override
//    public Role findByName(String name) {
//        return roleRepository.findByName(name);
//    }
//
//    @Override
//    public List<Role> findAll() {
//        return (List<Role>) roleRepository.findAll();
//    }
//
//    @Override
//    public Role findById(long id) {
//        return roleRepository.findById(id).orElse(null);
//    }
//}
