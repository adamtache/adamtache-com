$(document).ready(function(){
	$("#background").fadeTo(2000, 0.5);

	$("#nav").delay(500).fadeIn({queue: false, duration: 500});
	$("#nav").delay(500).animate({"top": "0px"}, 500);

	$("#title").delay(500).fadeIn({queue: false, duration: 500});
	$("#title").delay(750).animate({"top": "0px"}, 500);

	// if(screen.width<=725){
	// 	$("#title").css("margin-top","20px");
	// }

	$("#content").delay(875).fadeIn({queue: false, duration: 500});
	$("#content").delay(875).animate({"top": "0px"}, 500);

	$("#side").delay(1000).fadeIn({queue: false, duration: 500});
	$("#side").delay(1000).animate({"left": "0px"}, 500);

	$("#welcome").typed({
		strings: ["Hi there, I'm Adam."],
		contentType: 'html',
		startDelay: 2000,
		typeSpeed: 100
	});

	$("#homeButton").addClass("hvr-bubble-right");

	var buttonArr = ["#homeButton", "#educationButton", "#skillsButton", "#projectsButton", "#contactButton"];
	var contentArr = ["#home", "#education", "#skills", "#projects", "#contact"];
	
	$("#educationButton").click(function(){
		current(buttonArr, contentArr);
		$("#educationButton").addClass("hvr-bubble-right");
		$("#education").addClass("active");
		$("#education").fadeIn({queue: false, duration: 500});
	});

	$("#projectsButton").click(function(){
		current(buttonArr, contentArr);
		$("#projectsButton").addClass("hvr-bubble-right");
		$("#projects").addClass("active");
		$("#projects").delay(500).fadeIn({queue: false, duration: 500});
	});

	$("#skillsButton").click(function(){
		current(buttonArr, contentArr);
		$("#skillsButton").addClass("hvr-bubble-right");
		$("#skills").addClass("active");
		$("#skills").delay(500).fadeIn({queue: false, duration: 500});
	});

	$("#contactButton").click(function(){
		current(buttonArr, contentArr);
		$("#contactButton").addClass("hvr-bubble-right");
		$("#contact").addClass("active");
		$("#contact").delay(500).fadeIn({queue: false, duration: 500});
	});

	$("#homeButton").click(function(){
		current(buttonArr, contentArr);
		$("#homeButton").addClass("hvr-bubble-right");
		$("#home").addClass("active");
		$("#home").delay(500).fadeIn({queue: false, duration: 500});
	});

	function current(buttonArr, contentArr){
		for(var x=0; x<buttonArr.length; x++){
			if($(buttonArr[x]).hasClass("hvr-bubble-right")){
				$(buttonArr[x]).removeClass("hvr-bubble-right");
			}
		}
		for(var y=0; y<contentArr.length; y++){
			if($(contentArr[y]).hasClass("active")){
				$(contentArr[y]).removeClass("active");
				$(contentArr[y]).fadeOut({queue: false, duration: 100});
			}
		}
	}
});