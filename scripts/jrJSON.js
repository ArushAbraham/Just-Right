$(document).ready(function() {
	$.getJSON("json/team.json", function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#team").append(
					'<div class="col-lg-6 col-md-4 col-sm-6 portfolio-item"> ' +
                        '<div class="card h-100 text-center">' +
                        '<!--<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>-->' +
                        '<a href="#"><img class="card-img-top" src="' + value.image + '" alt=""></a>' +
                        '<div class="card-body"> <h4 class="card-title">' + value.name + '</h4>' +
                        '<h6 class="card-subtitle mb-2 text-muted">' + value.title + '</h6>' +
                        '<h6 class="card-subtitle mb-2 text-muted">' + value.department + '</h6>' +
                        '<p class="card-text">' + value.bio + '</p>' +
                        '</div></div></div>'
                        ;
				);
			});
		}); 
	});
});