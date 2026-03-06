package com.fmi.springcourse.server.dto.product;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.util.List;

import static com.fmi.springcourse.server.entity.Product.MAX_DESCRIPTION_LENGTH;

public class ProductRequest {
	public static final int MAX_TITLE_LENGTH = 255;
	public static final int MAX_PRICE_DIGITS = 10;
	
	@NotBlank(message = "Title cannot be blank")
	@Size(max = MAX_TITLE_LENGTH, message = "Title must be at most {max} characters long")
	private final String title;
	
	@DecimalMin(
		value = "0.0",
		inclusive = false,
		message = "Price must be greater than 0"
	)
	@Digits(
		integer = MAX_PRICE_DIGITS,
		fraction = 2,
		message = "Price must have up to {integer} digits and 2 decimals"
	)
	private final BigDecimal price;
	
	@NotNull(message = "Quantity cannot be null")
	@Min(value = 0, message = "Quantity cannot be negative")
	private final Integer quantity;
	
	@Size(
		max = MAX_DESCRIPTION_LENGTH,
		message = "Description must be less than {max} characters long"
	)
	private final String description;
	
	@DecimalMin(value = "0", message = "Discount cannot be negative")
	@DecimalMax(value = "100", message = "Discount cannot be more than 100")
	private final BigDecimal discount;
	
	private List<String> images;
	
	@NotBlank(message = "Title image must be uploaded")
	private String titleImage;
	
	private final long[] collectionsIds;
	
	private final boolean isOnMainPage;
	
	private String series;
	
	private String construction;
	
	private String model;
	
	private String core;
	
	private String finish;
	
	private String lockingMechanism;
	
	private String primaryLock;
	
	private String cardDescription;
	
	@PositiveOrZero(message = "Thickness can not be a negative number")
	private Double thickness;
	
	private String frame;
	
	private String innerStructure;
	
	public ProductRequest(String title,
	                      BigDecimal price,
	                      Integer quantity,
	                      String description,
	                      BigDecimal discount,
	                      List<String> images,
	                      String titleImage,
	                      long[] collectionsIds,
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
	                      String series) {
		this.title = title;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
		this.discount = discount;
		this.titleImage = titleImage;
		this.images = images;
		this.collectionsIds = collectionsIds;
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
	
	public String getTitle() {
		return title;
	}
	
	public long[] getCollectionsIds() {
		return collectionsIds;
	}
	
	public BigDecimal getPrice() {
		return price;
	}
	
	public Integer getQuantity() {
		return quantity;
	}
	
	public String getDescription() {
		return description;
	}
	
	public BigDecimal getDiscount() {
		return discount;
	}
	
	public List<String> getImages() {
		return images;
	}
	
	public boolean isOnMainPage() {
		return isOnMainPage;
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
}

