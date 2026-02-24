package com.fmi.springcourse.server.dto.product;

import com.fmi.springcourse.server.entity.Product;

import java.util.UUID;

public record ProductCard(Long id,
                          String title,
                          String description,
                          String titleImage,
                          UUID slug) {
	
	public ProductCard(Product product) {
		this(product.getId(),
			product.getTitle(),
			product.getDescription(),
			product.getTitleImage(),
			product.getSlug()
		);
	}
}
