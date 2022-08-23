package com.example.furama_back_end.repository;

import com.example.furama_back_end.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query(value = "select * from customer where delete_status = false ", nativeQuery = true)
    List<Customer> findAll();

    @Modifying
    @Query(value = "update customer set delete_status = true where id =:id", nativeQuery = true)
    void remove(@Param("id") int id);
}
