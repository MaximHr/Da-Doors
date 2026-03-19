package com.fmi.springcourse.server.controller;

import com.fmi.springcourse.server.dto.Response;
import com.fmi.springcourse.server.exception.EmailException;
import com.fmi.springcourse.server.exception.util.ExceptionResponse;
import com.fmi.springcourse.server.service.SubmissionService;
import com.fmi.springcourse.server.valueobject.FormData;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("submissions")
public class SubmissionController {
	private final SubmissionService submissionService;
	
	public SubmissionController(SubmissionService submissionService) {
		this.submissionService = submissionService;
	}
	
	@PostMapping("/")
	public Response<String> sendEmail(@RequestBody FormData formData) {
		System.out.println("controller " + formData);
		submissionService.sendEmail(formData);
		
		return new Response<>("Request sent successfully.");
	}
	
	@ExceptionHandler(IllegalArgumentException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ExceptionResponse illegalArgumentHandler(IllegalArgumentException e) {
		return new ExceptionResponse(HttpStatus.BAD_REQUEST, List.of(e.getMessage()));
	}
	
	@ExceptionHandler(EmailException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ExceptionResponse emailExceptionHandler(EmailException e) {
		return new ExceptionResponse(HttpStatus.INTERNAL_SERVER_ERROR, List.of(e.getMessage()));
	}
}
