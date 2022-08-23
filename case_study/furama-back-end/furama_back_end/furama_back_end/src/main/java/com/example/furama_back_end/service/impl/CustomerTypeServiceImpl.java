package com.example.furama_back_end.service.impl;

import com.example.furama_back_end.model.CustomerType;
import com.example.furama_back_end.service.CustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.furama_back_end.repository.CustomerTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerTypeServiceImpl implements CustomerTypeService {
    @Autowired
    private CustomerTypeRepository customerTypeRepository;

    @Override
    public List<CustomerType> findCustomerType() {
        return customerTypeRepository.findAll();
    }
}
