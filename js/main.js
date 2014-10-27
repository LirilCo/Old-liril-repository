$(document).on("ready",function(){
	$("#index-trigger").on("click",function(){
		$("#index-menu").toggleClass("open");
		$("#index-text").toggleClass("open");
		$("#index-trigger .index-arrow").toggleClass("open");
		$(".indexMenuItem").toggleClass("fadeInDown");
		$(".indexMenuItem").toggleClass("fadeOutUp");
		$(".indexMenuItem").toggleClass("open");

	})
	var wasPlaying = false;
	$("#dots").on("click",function(){
		$("#Store").toggleClass("open");
		$("#index-trigger").children().toggleClass("openedStore");
		$("#right-menu #dots").children().toggleClass("openedStore");
		$("#right-menu").children().toggleClass("openedStore");
		if(!player.paused() && $("#Store").hasClass("open")){
			player.pause();
			wasPlaying = true;
		}
		if(player.paused() && !$("#Store").hasClass("open") && wasPlaying == true){
			player.play();
			wasPlaying = false;
		}

	})

	setInterval(function(){
		$("#example_video_1").height($(window).height() - $("header").height() - 7);
		$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);


		if($("#profileSettings").hasClass("open") || $("#Store").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}if(!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
		}
	}, 50);

	$("#profileTrigger").on("click",function(){
		$("#right-menu .index-arrow").toggleClass("open");
		$("#profileSettings").toggleClass("open");
		
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