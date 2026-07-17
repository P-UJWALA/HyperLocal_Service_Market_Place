package com.hyperlocal.repository;

import com.hyperlocal.entity.WorkerSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerSkillRepository extends JpaRepository<WorkerSkill, Long> {

}