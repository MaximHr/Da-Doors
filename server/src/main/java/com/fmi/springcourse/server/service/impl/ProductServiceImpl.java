package com.fmi.springcourse.server.service.impl;

import com.fmi.springcourse.server.dto.PageResponse;
import com.fmi.springcourse.server.dto.product.ProductCard;
import com.fmi.springcourse.server.dto.product.ProductDetails;
import com.fmi.springcourse.server.dto.product.ProductListDto;
import com.fmi.springcourse.server.dto.product.ProductRequest;
import com.fmi.springcourse.server.entity.Product;
import com.fmi.springcourse.server.exception.EntityNotFoundException;
import com.fmi.springcourse.server.repository.ProductRepository;
import com.fmi.springcourse.server.service.ProductService;

import static com.fmi.springcourse.server.util.HTMLSanitizerUtil.sanitizeProductDetails;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {
	private static final int MAX_PAGE_SIZE = 500;
	private static final Set<String> ALLOWED_SORT_FIELDS = Set.of("createdAt");
	private final ProductRepository repository;
	
	public ProductServiceImpl(ProductRepository repository) {
		this.repository = repository;
	}
	
	@Override
	@Transactional
	public ProductDetails uploadProduct(ProductRequest req) {
		var productReq = new Product(
			req.getTitle(),
			req.getPrice(),
			req.getQuantity(),
			req.getDescription(),
			req.getDiscount(),
			req.getImages(),
			req.getTitleImage(),
			req.isOnMainPage()
		);
		sanitizeProductDetails(productReq);
		
		Product product = repository.save(productReq);
		
		return new ProductDetails(product);
	}
	
	@Override
	public List<ProductCard> getHomePageProducts() {
		return repository.findByIsOnMainPage(true)
			.stream()
			.map(ProductCard::new)
			.toList();
	}
	
	@Override
	@Transactional
	public ProductDetails updateProduct(Long id, ProductRequest req) {
		var newProduct = new Product(
			req.getTitle(),
			req.getPrice(),
			req.getQuantity(),
			req.getDescription(),
			req.getDiscount(),
			req.getImages(),
			req.getTitleImage(),
			req.isOnMainPage()
		);
		sanitizeProductDetails(newProduct);
		
		Product existingProduct = repository
			.findById(id)
			.orElseThrow(
				() -> new EntityNotFoundException("Could not update product because it was not found.")
			);
		
		existingProduct.setTitle(newProduct.getTitle());
		existingProduct.setDescription(newProduct.getDescription());
		existingProduct.setDiscount(newProduct.getDiscount());
		existingProduct.setImages(newProduct.getImages());
		existingProduct.setQuantity(newProduct.getQuantity());
		existingProduct.setPrice(newProduct.getPrice());
		existingProduct.setTitleImage(newProduct.getTitleImage());
		existingProduct.setOnMainPage(newProduct.isOnMainPage());
		
		return new ProductDetails(repository.save(existingProduct));
	}
	
	@Override
	@Transactional(readOnly = true)
	public ProductDetails getProductDetailsBySlug(String slugString) {
		return new ProductDetails(getProductBySlug(slugString));
	}
	
	private Product getProductBySlug(String slugString) {
		try {
			UUID slug = UUID.fromString(slugString);
			
			return repository
				.findBySlugWithImages(slug)
				.orElseThrow(
					() -> new EntityNotFoundException("Sorry, we couldn't find this product.")
				);
		} catch (IllegalArgumentException e) {
			throw new EntityNotFoundException("Sorry, we couldn't find this product.", e);
		}
	}
	
	@Override
	@Transactional(readOnly = true)
	public PageResponse<ProductListDto> listProducts(Pageable pageable) {
		Pageable safePageable = checkPageable(pageable);
		Page<Product> productPage = repository.findAll(safePageable);
		
		List<ProductListDto> content = productPage.stream()
			.map(ProductListDto::new)
			.toList();
		
		return new PageResponse<>(
			content,
			productPage.getTotalElements(),
			productPage.getTotalPages()
		);
	}
	
	private Pageable checkPageable(Pageable pageable) {
		if (pageable.getPageSize() > MAX_PAGE_SIZE) {
			throw new IllegalArgumentException("Max page size is " + MAX_PAGE_SIZE);
		}
		Sort sort = Sort.unsorted();
		
		for (Sort.Order order : pageable.getSort()) {
			if (ALLOWED_SORT_FIELDS.contains(order.getProperty())) {
				sort = sort.and(Sort.by(order));
			}
		}
		
		return PageRequest.of(
			pageable.getPageNumber(),
			pageable.getPageSize(),
			sort
		);
	}
	
	@Override
	public void deleteProduct(Long id) {
		if (id == null) {
			throw new EntityNotFoundException("Could not delete product because it was not found.");
		}
		
		repository.deleteById(id);
	}
}
