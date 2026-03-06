package com.fmi.springcourse.server.entity;

import com.fmi.springcourse.server.dto.product.ProductRequest;
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
		@Index(name = "slug_index", columnList = "slug"),
		@Index(name = "series_index", columnList = "series")
	}
)
public class Product {
	public static final int MAX_DESCRIPTION_LENGTH = 10_000;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	private String series;
	
	private String construction;
	
	private String model;
	
	private String core;
	
	private String finish;
	
	private String lockingMechanism;
	
	private String primaryLock;
	
	private String cardDescription;
	
	private Double thickness;
	
	private String frame;
	
	private String innerStructure;
	
	private BigDecimal price;
	
	private boolean isOnMainPage = false;
	
	private Integer quantity;
	
	@Column(columnDefinition = "TEXT")
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
		this.title = title;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
		this.discount = discount;
		this.images = images;
		this.titleImage = titleImage;
		this.isOnMainPage = isOnMainPage;
		this.series = series;
		this.construction = construction;
		this.model = model;
		this.core = core;
		this.finish = finish;
		this.lockingMechanism = lockingMechanism;
		this.primaryLock = primaryLock;
		this.cardDescription = cardDescription;
		this.thickness = thickness;
		this.frame = frame;
		this.innerStructure = innerStructure;
	}
	
	public static Product of(ProductRequest req) {
		if (req.getSeries() != null) {
			req.setSeries(req.getSeries().strip());
		}
		
		return new Product(
			req.getTitle(),
			req.getPrice(),
			req.getQuantity(),
			req.getDescription(),
			req.getDiscount(),
			req.getImages(),
			req.getTitleImage(),
			req.isOnMainPage(),
			req.getConstruction(),
			req.getModel(),
			req.getCore(),
			req.getFinish(),
			req.getLockingMechanism(),
			req.getPrimaryLock(),
			req.getCardDescription(),
			req.getThickness(),
			req.getFrame(),
			req.getInnerStructure(),
			req.getSeries()
		);
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
	
	public String getSeries() {
		return series;
	}
	
	public void setSeries(String series) {
		this.series = series;
	}
	
	public String getConstruction() {
		return construction;
	}
	
	public void setConstruction(String construction) {
		this.construction = construction;
	}
	
	public String getModel() {
		return model;
	}
	
	public void setModel(String model) {
		this.model = model;
	}
	
	public String getCore() {
		return core;
	}
	
	public void setCore(String core) {
		this.core = core;
	}
	
	public String getFinish() {
		return finish;
	}
	
	public void setFinish(String finish) {
		this.finish = finish;
	}
	
	public String getLockingMechanism() {
		return lockingMechanism;
	}
	
	public void setLockingMechanism(String lockingMechanism) {
		this.lockingMechanism = lockingMechanism;
	}
	
	public String getPrimaryLock() {
		return primaryLock;
	}
	
	public void setPrimaryLock(String primaryLock) {
		this.primaryLock = primaryLock;
	}
	
	public String getCardDescription() {
		return cardDescription;
	}
	
	public void setCardDescription(String cardDescription) {
		this.cardDescription = cardDescription;
	}
	
	public Double getThickness() {
		return thickness;
	}
	
	public void setThickness(Double thickness) {
		this.thickness = thickness;
	}
	
	public String getFrame() {
		return frame;
	}
	
	public void setFrame(String frame) {
		this.frame = frame;
	}
	
	public String getInnerStructure() {
		return innerStructure;
	}
	
	public void setInnerStructure(String innerStructure) {
		this.innerStructure = innerStructure;
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
