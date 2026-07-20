package com.hyperlocal.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyperlocal.server.entity.ProviderProfile;
import com.hyperlocal.server.entity.User;

public interface ProviderProfileRepository
        extends JpaRepository<ProviderProfile, Long> {

    Optional<ProviderProfile> findByUser(User user);

}