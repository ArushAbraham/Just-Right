//Menu plugin

$(document).ready(function() {
	
	//jQuery that sets background-color, color and font-size of the highlightMenu plugin
	
	$("#jr_menu").highlightMenu({
		bgColor:'#333',
		color:'#ffffff',
		fontSize: '100%'
	});
	
});	


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