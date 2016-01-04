$(document).ready(function(){
	$("#background").fadeTo(2000, 0.5);
	var topSlides = ["#nav","#title","#content"]; // Elements to slide in from top at page load
	var leftSlides = ["#side"]; // Elements to slide in from left at page load
	var del = 500; // initial delay in miliseconds
	var x;
	for(x=0; x<topSlides.length; x++){
		topSlide(topSlides[x], del+=125); // Slide in elements with delay of del
	}
	for(x=0; x<leftSlides.length; x++){
		leftSlide(leftSlides[x], del+=125); // Slide in elements with delay of del
	}

	//Pre-condition: hidden element
	//Post-condition: element faded in then slid into position from top
	function topSlide(ele, del){
		$(ele).delay(del).fadeIn({queue: false, duration: 500});
		$(ele).delay(del).animate({"top": "0px"}, 500);
	}

	//Pre-condition: hidden element
	//Post-condition: element faded in then slid into position from left
	function leftSlide(ele, del){
		$(ele).delay(del).fadeIn({queue: false, duration: 500});
		$(ele).delay(del).animate({"left": "0px"}, 500);
	}

	var pages = ["Home", "Experience", "Education", "Skills", "Projects", "Contact"]; // Navigation pages
	for(x=0; x<pages.length; x++){
		$("#"+pages[x]+"Page").css("display", "none").css("margin-bottom", "10px");
	}
	var navEleHeight = 200/pages.length; // Height of each nav button
	$("#navList").css("height", navEleHeight*pages.length);
	for(x=0; x<pages.length; x++){
		var code = $("<li></li>").attr("id", pages[x]).html(pages[x]);
		$(code).css("height", navEleHeight);
		$(code).addClass("hvr-back-pulse");
		$("#navList").append(code); // Adds each navigation page as li element to ul#navList
		if(x==0)
			$("#"+pages[x]).addClass("hvr-bubble-right") // Adds arrow to current page
	}

	var active = "#Home"; // Currently displayed page
	active = switchTo(active); // Display initial page

	//Pre-condition: "to" is nav element clicked with corresponding hidden page
	//Post-condition: page faded in and arrow added to "to"
	function switchTo(to){
		$(to+"Page").delay(1000).fadeIn({queue: false, duration: 500});
		$(to).addClass("hvr-bubble-right");
		return to;
	}
	
	// Detects click for each nav element and adjusts page content
	$(".hvr-back-pulse").each(function(){
		var id = $(this).attr("id");
		// Adds click to each nav element
		$("#"+id).click(function(){
			if(("#"+id)!=active){ // Only adjust content if different page than currently active one clicked
				console.log(id);
				$(active).removeClass("hvr-bubble-right");
				$(active+"Page").css("display","none");
				active = switchTo("#"+id);
			}
		});
	});

	// Controls typing script from typed.js
	$("#welcome").typed({
		strings: ["Hi there, I'm Adam."],
		contentType: "html",
		startDelay: 2000,
		typeSpeed: 100
	});
});