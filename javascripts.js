// function removeTitle(elementId) {
// 	var element = document.getElementById(elementId);
// 	element.parentNode.removeChild(element);
// }
// alert("load js");

$(document).ready(function() {
	// wild card character selects all elements on the page
	// which means the fadeOut() starts for any clicked element
	// on the page
	$("*").click(function() { 
		$("#introText").fadeOut("slow", function() {
			// alert("fade out complete");
		});
	});
});