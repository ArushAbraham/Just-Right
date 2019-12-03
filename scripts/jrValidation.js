$(document).ready(function() {
	$("#contact_form").validate({
		rules: {
			name: {
				required: true
			},
			mail: {
				required: true,
				email: true
			},
			date: {
				required: true,
				date: true
			},
			summary: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Please enter your name"
			},
			mail: {
				required: "Please enter an email address",
				email: "Please enter a valid email address"
			},
			date: {
				required: "Please enter the date of purchase or your concern",
				date: "Please enter a valid date"
			},
			summary: {
				required: "Please tell us what caused you write this message"
			}
		}
	});
});