$(window).load(function() {
	if (window.matchMedia("(min-width: 767px)").matches) {
		$(".main-nav").show();
		$(".button").hide();
  	/* the viewport is at least 767 pixels wide */
	} else {
		$(".main-nav").hide();
		$(".button").click(function() {
			$(".main-nav").toggle("slide");
		});
  	/* the viewport is less than 767 pixels wide */
	}
});