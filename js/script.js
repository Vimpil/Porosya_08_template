jQuery(document).ready(function($) {
	$('#my-menu').mmenu({
					drag 		: true,
					pageScroll 	: {
						scroll 		: true,
						update		: true
					},
					// extensions: {
					// 	'all': ['pagedim-white'],
					// 	'(min-width: 400px)' : ['pagedim-black']
					// },
					sidebar 	: {
						expanded 	: 800
					}
				});
	$("#my-header").mhead({
		scroll: {
			hide: 200
		}
	});
	$("#my-header:not(.mm-sticky)").mhead({
		scroll: false
	});
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myMainDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		var myMainDropdown = document.getElementById("myMainDropdown");
		if (myMainDropdown.classList.contains('show')) {
			myMainDropdown.classList.remove('show');
		}
	}
}