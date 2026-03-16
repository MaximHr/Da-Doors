package com.fmi.springcourse.server.valueobject;

public record FormData(String name,
                       String phone,
                       String email,
                       String doorType,
                       String size,
                       String city,
                       String message) {
	public FormData {
		if (name == null || name.isBlank()) {
			throw new IllegalArgumentException("Name can not be blank");
		}
		if (phone == null || phone.isBlank()) {
			throw new IllegalArgumentException("Phone can not be blank");
		}
		if (email == null || email.isBlank()) {
			throw new IllegalArgumentException("Email can not be blank");
		}
		if (doorType == null || doorType.isBlank()) {
			throw new IllegalArgumentException("Door type can not be blank");
		}
		if (message == null || message.isBlank()) {
			throw new IllegalArgumentException("Message can not be blank");
		}
	}
}
