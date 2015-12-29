$(document).ready(function(){
	$("#background").fadeTo(2000, 0.5);
	var topSlides = ["#nav","#title","#content"];
	var leftSlides = ["#side"];
	var topLength = topSlides.length;
	var leftLength = leftSlides.length;
	var del = 500;
	var x;
	for(x=0; x<topLength; x++){
		topSlide(topSlides[x], del+=125);
	}
	for(x=0; x<leftLength; x++){
		leftSlide(leftSlides[x], del+=125);
	}

	function topSlide(ele, del){
		$(ele).delay(del).fadeIn({queue: false, duration: 500});
		$(ele).delay(del).animate({"top": "0px"}, 500);
	}

	function leftSlide(ele, del){
		$(ele).delay(del).fadeIn({queue: false, duration: 500});
		$(ele).delay(del).animate({"left": "0px"}, 500);
	}

	var pages = ["Home", "About", "Education", "Skills", "Projects", "Contact"];
	var navEleHeight = 200/pages.length;
	$("#navList").css("height", navEleHeight*pages.length);
	for(x=0; x<pages.length; x++){
		var code = $("<li></li>").attr("id", pages[x]).html(pages[x]);
		$(code).css("height", navEleHeight);
		$(code).addClass("hvr-back-pulse");
		$("#navList").append(code);
		if(x==0)
			$("#"+pages[x]).addClass("hvr-bubble-right")
	}

	var active = "#Home";
	active = switchTo(active);
	
	$(".hvr-back-pulse").each(function(){
		var id = $(this).attr("id");
		$("#"+id).click(function(){
			if(("#"+id)!=active){
				console.log(id);
				$(active).removeClass("hvr-bubble-right");
				$(active+"Page").fadeOut({queue: false, duration: 50});
				active = switchTo("#"+id);
			}
		});
	});

	function switchTo(to){
		$(to+"Page").delay(1000).fadeIn({queue: false, duration: 500});
		$(to).addClass("hvr-bubble-right");
		return to;
	}

	$("#welcome").typed({
		strings: ["Hi there, I'm Adam."],
		contentType: "html",
		startDelay: 2000,
		typeSpeed: 100
	});
});