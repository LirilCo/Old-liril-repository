$(document).on("ready",function(){
	$("#index-trigger").on("click",function(){
		$("#index-menu").toggleClass("open");
		$("#index-text").toggleClass("open");
		$("#index-trigger .index-arrow").toggleClass("open");
		$(".indexMenuItem").toggleClass("fadeInDown");
		$(".indexMenuItem").toggleClass("fadeOutUp");
		$(".indexMenuItem").toggleClass("open");

	});
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
		if(player.paused() && !$("#Store").hasClass("open") && wasPlaying === true){
			player.play();
			wasPlaying = false;
		}

	});

	setInterval(function(){
        $("#index-menu.open").height(32* $("#index-menu.open > ul > a").length);

        if(player.paused()){
            $("#play").removeClass("playing")
        }else{
            $("#play").addClass("playing")
		}
		$("#example_video_1").height($(window).height() - $("header").height() - 12);
		$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);


		if($("#profileSettings").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}if(!$("#profileSettings").hasClass("open") && $("#Store").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
		}
        if(!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}
        
	}, 10);

	$("#profileTrigger").on("click",function(){
		$("#right-menu .index-arrow").toggleClass("open");
		$("#profileSettings").toggleClass("open");
		
	});
    $("#play").on("click",function(){
        if(player.paused()){
		player.play()
        }else{
        player.pause();
		}
	});
	

	$(".vjs-play-control.vjs-control").css({
		"display": "none"
	});
	$(".vjs-current-time.vjs-time-controls.vjs-control").css({
		"display": "none"
	});
	$(".vjs-time-divider").css({
		"display": "none"
	});
	$(".vjs-duration-display").css({
		"display": "none"
	});
	$(".vjs-mute-control.vjs-control").css({
		"display": "none"
	});
$(".vjs-volume-control.vjs-control").css({
		"display": "none"
	});
$(".vjs-captions-button.vjs-menu-button.vjs-control ").css({
		"display": "none"
	});


});

function jump(s,t){
		$(s).on("click",function(){
		player.currentTime(t);
	});
}