package com.fmi.springcourse.server.dto.product;

import com.fmi.springcourse.server.entity.Product;

import java.math.BigDecimal;
import java.util.UUID;

public record ProductListDto(Long id,
                             String title,
                             BigDecimal price,
                             String description,
                             BigDecimal discount,
                             String titleImage,
                             UUID slug,
                             String series
) {
	public ProductListDto(Product p) {
		
		this(
			p.getId(),
			p.getTitle(),
			p.getPrice(),
			p.getDescription(),
			p.getDiscount(),
			p.getTitleImage(),
			p.getSlug(),
			p.getSeries()
		);
	}
}
