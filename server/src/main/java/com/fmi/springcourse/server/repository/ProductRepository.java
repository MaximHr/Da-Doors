package com.fmi.springcourse.server.repository;

import com.fmi.springcourse.server.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, Long> {
	@Query("SELECT p FROM Product p LEFT JOIN FETCH p.images WHERE p.slug =:slug")
	Optional<Product> findBySlugWithImages(@Param("slug") UUID slug);
	
	Page<Product> findAll(Pageable pageable);
	
	List<Product> findByIsOnMainPage(boolean isOnMainPage);
	
	Page<Product> findAllBySeries(String series, Pageable pageable);
}
