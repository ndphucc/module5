package com.example.demo.service.impl;

import com.example.demo.model.CustomerType;
import com.example.demo.repository.ICustomerTypeRepository;
import com.example.demo.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService {
  @Autowired
  private ICustomerTypeRepository customerTypeRepository;

  public List<CustomerType> findCustomerType() {
    return customerTypeRepository.findAll();
  }

  @Override
  public CustomerType findById(int id) {
    return customerTypeRepository.findById(id).get();
  }

}
