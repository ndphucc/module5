package com.example.furama_back_end.service.impl;

import com.example.furama_back_end.model.Customer;
import com.example.furama_back_end.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.furama_back_end.repository.CustomerRepository;

import java.util.List;

public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public List<Customer> findAll() {
        return null;
    }

    @Override
    public void remove(int id) {
        customerRepository.remove(id);
    }

    @Override
    public Customer findById(int id) {
        return customerRepository.findById(id).get();
    }
}
