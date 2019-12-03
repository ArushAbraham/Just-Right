$(document).ready(function() {
	$("#nav_button").click(function() {
	  var x = document.getElementById("links");
	  if (x.style.display === "block") {
		x.style.display = "none";
	  } else {
		x.style.display = "block";
	  }
	});
	
	
	$(".desktop h3").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") == "minus") {
		   	$(this).next().slideDown(1000, "easeOutBounce");
	   	}
	   	else {
	        $(this).next().slideUp(1000, "easeInBounce");
	   	}
    }); // end click
	
(function($){
	$.fn.highlightMenu= function(options) {
		//Default values for the plugin
		var defaults= $.extend({
			'bgColor' : '#333',
			'color' : '#000000',
			'hoverBgColor' : 'red',
			'hoverColor' : '#ffffff',
			'linkWidth' : '125px',
			}, options);
		return this.each(function() {
			var nav = $("nav");
			var list = $("#jr_menu li");
			var anchorTag = $("li a");
			var o = defaults;
			
			nav.css('overflow', 'hidden')
			 .css('background-color', '#333')
			 .css('position', 'relative')
			 .css('margin-top', '-1.5em')
			 .css('overflow', 'hidden');
			
			list.css('display', 'inline');
			
			
			anchorTag.css('font-family', 'arial, helvetica, sans-serif')
			 .css('font-weight', 'bold')
			 .css('font-size', o.fontSize)
			 .css('text-decoration', 'none')
			 .css('background-color', o.bgColor)
			 .css('color', o.color)
			 .css('width', o.linkWidth)
			 .css('margin', '0.3em')
			 .css('padding', '0.8em');
			anchorTag.mouseover(function() {
				$(this).css('background-color', o.hoverBgColor)
				.css('color', o.hoverColor);
			});
			anchorTag.mouseout(function() {
				$(this).css('background-color', o.bgColor).
				css('color', o.color);
			});
		});
		}
	})(jQuery);
	
	$("#jr_menu").highlightMenu({
		bgColor:'#333',
		color:'#ffffff',
		fontSize: '100%'
	});
	
	
	$.getJSON("json/team.json", function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#team").append(
					"Name: " + value.name + "<br>" + 
					"Title: " + value.title + "<br>" + 
					"Bio: " + value.bio + "<br><br>"
				);
			});
		}); 
	});
	
	//Flickr
	
	var searchTerm;
	$("#btnSearch").click(function() {
		
		// Set the search term
		searchTerm = "";
		if ($("#search").val() == "") { alert("You must enter a range name!"); }
		else {
			searchTerm = $("#search").val() + "ranges";
			// Build the URL based on the search term
			var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
					  "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";

			$.getJSON(url, function(data){
				var html = "";
				$.each(data.items, function(i, item){
					html += "<h2>" + item.title + "</h2>";	
					html += "<img src=" + item.media.m + ">";
					html += "<p><b>Tags: </b>" + item.tags + "</p>";
				});
				$("#photos").html(html);
			});
		}
	});
});
