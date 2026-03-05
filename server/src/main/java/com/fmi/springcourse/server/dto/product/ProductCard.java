package com.fmi.springcourse.server.dto.product;

import com.fmi.springcourse.server.entity.Product;

import java.util.UUID;

public record ProductCard(Long id,
                          String series,
                          String description,
                          String titleImage,
                          UUID slug) {
	
	public ProductCard(Product product) {
		this(product.getId(),
			product.getSeries(),
			product.getCardDescription(),
			product.getTitleImage(),
			product.getSlug()
		);
	}
}
