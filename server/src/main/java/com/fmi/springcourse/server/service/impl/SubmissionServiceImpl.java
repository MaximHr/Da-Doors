package com.fmi.springcourse.server.service.impl;

import com.fmi.springcourse.server.exception.EmailException;
import com.fmi.springcourse.server.service.SubmissionService;
import com.fmi.springcourse.server.valueobject.FormData;
import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import org.springframework.stereotype.Service;

@Service
public class SubmissionServiceImpl implements SubmissionService {
	private static final String EMAIL_ADDRESS = "dadoors.bg@gmail.com";
	private final Resend resend;
	
	public SubmissionServiceImpl(Resend resend) {
		this.resend = resend;
	}
	
	@Override
	public void sendEmail(FormData formData) {
		System.out.println(formData);
		CreateEmailOptions params = CreateEmailOptions.builder()
			.from("submissions@support.dadoors.com")
			.to(EMAIL_ADDRESS)
			.subject("New form submission from dadoors.com")
			.html(generateEmailBody(formData))
			.build();
		
		try {
			resend.emails()
				.send(params);
		} catch (ResendException e) {
			e.printStackTrace();
			throw new EmailException("Failed to send email", e);
		}
	}
	
	private static String generateEmailBody(FormData formData) {
		StringBuilder html = new StringBuilder();
		
		html.append("<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>")
			.append("<h2 style='color: #333;'>Ново запитване</h2>")
			.append("<table style='width: 100%; border-collapse: collapse;'>")
			
			.append(row("Name", formData.name()))
			.append(row("Phone", formData.phone()))
			.append(row("Email", formData.email()))
			.append(row("Door Type", formData.doorType()));
		
		if (formData.size() != null && !formData.size().isBlank()) {
			html.append(row("Size", formData.size()));
		}
		if (formData.city() != null && !formData.city().isBlank()) {
			html.append(row("City", formData.city()));
		}
		
		html.append("</table>")
			.append("<h3 style='color: #333;'>Message</h3>")
			.append("<p style='background: #f9f9f9; padding: 12px; border-radius: 4px;'>")
			.append(formData.message())
			.append("</p>")
			.append("</div>");
		
		return html.toString();
	}
	
	private static String row(String label, String value) {
		return "<tr>" +
			"<td style='padding: 8px; font-weight: bold; width: 30%; border-bottom: 1px solid #eee;'>"
			+ label +
			"</td>" +
			"<td style='padding: 8px; border-bottom: 1px solid #eee;'>" + value + "</td>" +
			"</tr>";
	}
}
