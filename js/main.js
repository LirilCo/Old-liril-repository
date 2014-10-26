$(document).on("ready",function(){
	$("#index-trigger").on("click",function(){
		$("#index-menu").toggleClass("open");
		$("#index-text").toggleClass("open");
		$("#index-trigger .index-arrow").toggleClass("open");
		$(".indexMenuItem").toggleClass("fadeInDown");
		$(".indexMenuItem").toggleClass("fadeOutUp");
		$(".indexMenuItem").toggleClass("open");
	})
	setInterval(function(){$("#example_video_1").height($(document).height() - $("header").height() - 7);}, 100);

	$("#profileTrigger").on("click",function(){
		$("#right-menu .index-arrow").toggleClass("open");
		$("#profileSettings").toggleClass("open");
		if($("#profileSettings").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}else{
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
		}
	})
	
	jump("#start",0);
	jump("#second",10);
	jump("#third",20);
	jump("#fourth",35);
	$(".vjs-play-control.vjs-control").css({
		"position": "fixed",
		"top": "-3px",
		"left": "230px"
	});
	$(".vjs-current-time.vjs-time-controls.vjs-control").css({
		"position": "fixed",
		"top": "-10px",
		"left": "270px",
		"font-size":"20px"
	});
	$(".vjs-time-divider").css({
		"position": "fixed",
		"top": "-10px",
		"left": "335px",
		"font-size":"20px"
	});
	$(".vjs-duration-display").css({
		"position": "fixed",
		"top": "5px",
		"left": "345px",
		"font-size":"20px"
	});
	$(".vjs-mute-control.vjs-control").css({
		"position": "fixed",
		"top": "5px",
		"left": "400px"
	});
$(".vjs-volume-control.vjs-control").css({
		"position": "fixed",
		"top": "7px",
		"left": "435px"
	});
$(".vjs-captions-button.vjs-menu-button.vjs-control ").css({
		"position": "fixed",
		"top": "6px",
		"left": "500px"
	});


})

function jump(s,t){
		$(s).on("click",function(){
		player.currentTime(t);
	})
}