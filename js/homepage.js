$('.carousel').carousel({
  interval: 4000,
  pause: false
})

$(document).ready(function() {
	
	var $screenWidth = screen.width;
	var $scrollWidth = getScrollbarWidth();
	console.log($screenWidth);
	console.log($scrollWidth);

	function getScrollbarWidth() {
  		return window.innerWidth - document.documentElement.clientWidth;
	}

	$('#myCarousel').width($screenWidth - $scrollWidth);

});
