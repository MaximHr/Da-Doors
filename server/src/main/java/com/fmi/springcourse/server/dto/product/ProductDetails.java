package com.fmi.springcourse.server.dto.product;

import com.fmi.springcourse.server.entity.Product;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record ProductDetails(Long id,
                             String title,
                             String description,
                             BigDecimal price,
                             Integer quantity,
                             BigDecimal discount,
                             List<String> images,
                             String titleImage,
                             UUID slug,
                             Instant createdAt,
                             boolean isOnMainPage,
                             String construction,
                             String model,
                             String core,
                             String finish,
                             String lockingMechanism,
                             String primaryLock,
                             String cardDescription,
                             Double thickness,
                             String frame,
                             String innerStructure,
                             String series
) {
	public ProductDetails(Product p) {
		this(
			p.getId(),
			p.getTitle(),
			p.getDescription(),
			p.getPrice(),
			p.getQuantity(),
			p.getDiscount(),
			p.getImages(),
			p.getTitleImage(),
			p.getSlug(),
			p.getCreatedAt(),
			p.isOnMainPage(),
			p.getConstruction(),
			p.getModel(),
			p.getCore(),
			p.getFinish(),
			p.getLockingMechanism(),
			p.getPrimaryLock(),
			p.getCardDescription(),
			p.getThickness(),
			p.getFrame(),
			p.getInnerStructure(),
			p.getSeries()
		);
	}
}
