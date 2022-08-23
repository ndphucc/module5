package com.example.demo.service.impl;

import com.example.demo.model.Customer;
import com.example.demo.repository.ICustomerRepository;
import com.example.demo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
  @Autowired
  private ICustomerRepository customerRepository;

  @Override
  public Customer save(Customer customer) {
    return customerRepository.save(customer);
  }

  @Override
  public List<Customer> findAll() {
    return customerRepository.findAll();
  }

  @Override
  public Customer remove(int id) {
    customerRepository.deleteById(id);
    return new Customer();
  }

  @Override
  public Customer findById(int id) {
    return customerRepository.findById(id).get();
  }

}
