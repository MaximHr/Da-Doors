package com.fmi.springcourse.server.config;

import com.fmi.springcourse.server.entity.User;
import com.fmi.springcourse.server.repository.UserRepository;
import com.fmi.springcourse.server.valueobject.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {
	@Bean
	CommandLineRunner initUsers(UserRepository userRepository,
	                            PasswordEncoder passwordEncoder) {
		return args -> {
			if (userRepository.count() == 0) {
				String email = "admin@gmail.com";
				String pass = passwordEncoder.encode("admin123");
				Role role = Role.OWNER;
				
				User admin = new User(email, pass, role);
				
				userRepository.save(admin);
			}
		};
	}
}