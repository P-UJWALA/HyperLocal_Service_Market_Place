package com.hyperlocal.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

// Entities, repositories, and services live under com.hyperlocal.* (a sibling
// package to com.hyperlocal.server, not a sub-package of it), so Spring Boot's
// default scanning from this class alone would miss all of them. The three
// annotations below point scanning at the right packages explicitly.
@SpringBootApplication
@ComponentScan(basePackages = "com.hyperlocal")
@EntityScan(basePackages = "com.hyperlocal.entity")
@EnableJpaRepositories(basePackages = "com.hyperlocal.repository")
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
}
