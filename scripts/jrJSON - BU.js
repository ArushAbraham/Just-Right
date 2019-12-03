$(document).ready(function() {
	$.getJSON("json/team.json", function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#team").append(
					"<div class=\"card\" style=\"width: 20%;height: 200px\">" +
					"<u>Name</u>: " + value.name + "<br>" + 
					"Title: " + value.title + "<br>" + 
					"Department: " + value.department + "<br>" +
					"Bio: " + value.bio + "<br><br></div>"
				);
			});
		}); 
	});
});