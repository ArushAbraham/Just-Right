$(document).ready(function() {
	$("#nav_button").click(function() {
	  var x = document.getElementById("links");
	  if (x.style.display === "block") {
		x.style.display = "none";
	  } else {
		x.style.display = "block";
	  }
	});
	
	$("#welcome_image").mouseover(function() {
		$( "#welcome" ).animate({
		color: "#792359"
		});
	});
	$("#welcome_image").mouseout(function() {
		$( "#welcome" ).animate({
		color: "#000"
		});
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
	
});
