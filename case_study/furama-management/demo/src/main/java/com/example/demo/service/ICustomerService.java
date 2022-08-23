package com.example.demo.service;


import com.example.demo.model.Customer;

import java.util.List;

public interface ICustomerService {
  List<Customer> findAll();

  Customer save(Customer customer);

  Customer remove(int id);

  Customer findById(int id);

}
