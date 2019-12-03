$(document).ready(function() {
	//Flickr
	var searchTerm;
	$("#btnSearch").click(function() {
		
		// Set the search term
		searchTerm = "";
		if ($("#search").val() == "") { alert("You must enter the name of a Range or Stove"); }
		else {
			searchTerm +=  $("#search").val();
			// Build the URL based on the search term
			var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
					  "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";

			$.getJSON(url, function(data){
				var html = "";
				$.each(data.items, function(i, item){
					html += "<div class=\"card\"><h3>" + item.title + "</h3>";	
					html += "<img src=" + item.media.m + "></div>";
				});
				$("#photos").html(html);
			});
		}
	});
});
