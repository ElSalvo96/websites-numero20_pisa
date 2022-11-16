$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

$(document).ready(function () {
	// Add scrollspy to <body>
	$('body').scrollspy({ target: '.navbar', offset: 50 });

	// Add smooth scrolling on all links inside the navbar
	$('#navbarText a, #brand').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			const hash = this.hash;
			const scrollTop = $(hash).offset().top - 30;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: scrollTop,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
	$('.navbar-nav>li>a').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});
