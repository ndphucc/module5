package com.example.furama_back_end.service;

import com.example.furama_back_end.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerService {
    List<Customer> findAll();

    void save(Customer customer);

    void remove(int id);

    Customer findById(int id);
}
