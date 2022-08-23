package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.CustomerType;
import com.example.demo.service.ICustomerService;
import com.example.demo.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/customer")
public class CustomerRestController {
  @Autowired
  private ICustomerService customerService;
  @Autowired
  private ICustomerTypeService customerTypeService;

  @GetMapping("/list")
  public ResponseEntity<List<Customer>> getAll() {
    return new ResponseEntity<>(customerService.findAll(), HttpStatus.OK);
  }

  @GetMapping("/customerType/list")
  public ResponseEntity<List<CustomerType>> findAllCustomerType() {
    return new ResponseEntity<>(customerTypeService.findCustomerType(), HttpStatus.OK);
  }

  @GetMapping("/customerType/{id}")
  public ResponseEntity<CustomerType> findByIdCustomerType(@PathVariable int id) {
    return new ResponseEntity<>(customerTypeService.findById(id), HttpStatus.OK);
  }

  @PostMapping("/add")
  public ResponseEntity<Customer> save(@RequestBody Customer customer) {
    this.customerService.save(customer);
    return new ResponseEntity<>(customer, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Customer> findById(@PathVariable int id) {
    return new ResponseEntity<>(customerService.findById(id), HttpStatus.OK);
  }

  @PutMapping("/edit")
  public ResponseEntity<Customer> edit(@RequestBody Customer customer) {
    return new ResponseEntity<>(customerService.save(customer), HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Customer> delete(@PathVariable int id) {
    return new ResponseEntity<>(this.customerService.remove(id), HttpStatus.OK);
  }
}
