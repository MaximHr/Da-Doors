package com.fmi.springcourse.server.valueobject;

import java.util.Locale;

public enum Role {
	OWNER,
	PRODUCT_MANAGER;
	
	@Override
	public String toString() {
		String str = name().substring(0, 1).toUpperCase() +
			name().substring(1).toLowerCase(Locale.ROOT);
		
		return str.replace("_", " ");
	}
}
