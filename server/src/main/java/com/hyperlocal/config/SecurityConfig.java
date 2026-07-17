package com.hyperlocal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * TEMPORARY development configuration.
 *
 * spring-boot-starter-security is on the classpath, which by default locks
 * every endpoint behind HTTP Basic auth with a random password printed in
 * the console log. That makes the API impossible to test with Postman/curl
 * until real login is built. This config opens everything up for now.
 *
 * Replace this with real authentication (e.g. JWT-based login using the
 * User entity's email/password + Role) before this goes anywhere near
 * production.
 */
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll());
        return http.build();
    }
}
