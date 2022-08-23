package com.example.furama_back_end;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class FuramaBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(FuramaBackEndApplication.class, args);
	}

}
