package com.fmi.springcourse.server.service;

import com.fmi.springcourse.server.valueobject.FormData;

public interface SubmissionService {
	void sendEmail(FormData formData);
}
