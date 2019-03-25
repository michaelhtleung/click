$(document).ready(function() {
	// wild card character selects all elements on the page
	// which means the fadeOut() starts for any clicked element
	// on the page
	$("*").click(function() { 
		// no need to rip things out of the DOM now, because
		// fadeOut() sets display:none last
		$("#introText").fadeOut("slow"); 
	});
});