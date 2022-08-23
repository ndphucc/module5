package com.example.demo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CustomerType {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String name;
  @OneToMany(mappedBy = "customerType")
  private Set<Customer> customerSet;

  public CustomerType() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
