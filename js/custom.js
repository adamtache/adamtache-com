var active = false;
$(document).ready(function(){
	$("#background").fadeTo(2000, 0.5);

	$("#nav").delay(500).fadeIn({queue: false, duration: 500});
	$("#nav").delay(500).animate({"top": "0px"}, 500);

	$("#title").delay(500).fadeIn({queue: false, duration: 500});
	$("#title").delay(750).animate({"top": "0px"}, 500);

	$("#home").delay(750).fadeIn({queue: false, duration: 500});
	$("#home").delay(750).animate({"top": "0px"}, 500);

	$("#side").delay(1000).fadeIn({queue: false, duration: 500});
	$("#side").delay(1000).animate({"left": "0px"}, 500);

	$("#welcome").typed({
		strings: ["Hi there, I'm Adam."],
		contentType: 'html',
		startDelay: 2000,
		typeSpeed: 100
	});
});