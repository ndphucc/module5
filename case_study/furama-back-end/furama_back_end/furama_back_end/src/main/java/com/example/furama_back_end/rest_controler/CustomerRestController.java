package com.example.furama_back_end.rest_controler;

import com.example.furama_back_end.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.furama_back_end.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("api/customer")
public class CustomerRestController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/list")
    public ResponseEntity<List<Customer>> getAll() {
        return new ResponseEntity<>(customerService.findAll(), HttpStatus.OK);
    }
}

