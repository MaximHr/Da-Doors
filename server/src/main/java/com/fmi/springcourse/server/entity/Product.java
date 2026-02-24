package com.fmi.springcourse.server.entity;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import org.springframework.data.annotation.CreatedDate;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(
	indexes = {
		@Index(name = "slug_index", columnList = "slug")
	}
)
public class Product {
	public static final int MAX_DESCRIPTION_LENGTH = 10_000;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	private BigDecimal price;
	
	private boolean isOnMainPage = false;
	
	private Integer quantity;
	
	@Column(length = MAX_DESCRIPTION_LENGTH, nullable = false)
	private String description;
	
	private BigDecimal discount;
	
	@Column(nullable = false)
	private String titleImage;
	
	@Column(updatable = false, nullable = false, unique = true)
	private final UUID slug = UUID.randomUUID();
	
	@CreatedDate
	@Column(updatable = false)
	private final Instant createdAt = Instant.now();
	
	@ElementCollection(fetch = FetchType.LAZY)
	private List<String> images;
	
	protected Product() {
	}
	
	public Product(String title,
	               BigDecimal price,
	               Integer quantity,
	               String description,
	               BigDecimal discount,
	               List<String> images,
	               String titleImage,
	               boolean isOnMainPage
	) {
		this.title = title;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
		this.discount = discount;
		this.images = images;
		this.titleImage = titleImage;
		this.isOnMainPage = isOnMainPage;
	}
	
	public Long getId() {
		return id;
	}
	
	public BigDecimal getDiscount() {
		return discount;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}
	
	public BigDecimal getPrice() {
		return price;
	}
	
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	
	public Integer getQuantity() {
		return quantity;
	}
	
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public UUID getSlug() {
		return slug;
	}
	
	public Instant getCreatedAt() {
		return createdAt;
	}
	
	public List<String> getImages() {
		return images;
	}
	
	public void setImages(List<String> images) {
		this.images = images;
	}
	
	public String getTitleImage() {
		return titleImage;
	}
	
	public void setTitleImage(String titleImage) {
		this.titleImage = titleImage;
	}
	
	public boolean isOnMainPage() {
		return isOnMainPage;
	}
	
	public void setOnMainPage(boolean onMainPage) {
		isOnMainPage = onMainPage;
	}
	
	@Override
	public boolean equals(Object o) {
		if (!(o instanceof Product product)) return false;
		return Objects.equals(id, product.id);
	}
	
	@Override
	public String toString() {
		return "Product{" +
			"title='" + title + '\'' +
			", price=" + price +
			", id=" + id +
			'}';
	}
	
	@Override
	public int hashCode() {
		return Objects.hashCode(id);
	}
}
