var vidHeight;
var maxz = 0;
var best = 0;
var out = false;
var copiedWidget;
var snapping = true;
pasted = true;
type = "none";
copiedTop = 0;
select = false;
copiedLeft = 0;
$(document).on("ready",function(){
    $(".indexMenuItem ").prop("title", function(){ 
    return $(this).text();
});
    			player.play();
			player.pause();
			$(".grid").bind('click', function() {
    			$(this).toggleClass("open");
 			$(".panel#grid").toggleClass("top"); 			
 			$(".panel#presets").toggleClass("top");
});
	$(".panel#presets>section").width($(this).height()*0.3)
 	
	$("#index-trigger").on("click",function(){
		$("#index-menu").toggleClass("open");
		$("#index-text").toggleClass("open");
		$("#index-trigger .index-arrow").toggleClass("open");
		$(".indexMenuItem").toggleClass("fadeInDown");
		$(".indexMenuItem").toggleClass("fadeOutUp");
		$(".indexMenuItem").toggleClass("open");

	});
	
	$('.widgetero').mousedown(function(e) {
				getActual().addClass("selectedWidget");

	})

	$('.widgets li').mousedown(function(e) {

	$(this).find($( ".widgets .widget" )).clone().addClass('widget draggable').appendTo( ".widgetero" );
	

var dropped = false;
$('.widgetero .widget').last().draggable({
	stack:".widgetero .widget",
	cursor: "move", 
	snap: ".vidVidCustomizationMode, .widget", 
	snapMode: "both", 
	revertDuration: 100,
	snapTolerance: 10,
	  distance: 10,
containment: "window",
	revert: false,
    start: function(event, ui) {
    	if(!$('.widgetero .widget').last().hasClass("dropped")){  
    		ui.helper.data('dropped', false);
    	}else{
    		revert: true
    	}
      
    },
    stop: function(event, ui)
    {
		if(!ui.helper.data('dropped')){
			$(this).remove()
		}      
    }

})
	
	
	
	

$('.widgetero .widget').last().css({left: e.pageX- $('.widgetero .widget').last().width()/2,top: e.pageY- $('.widgetero .widget').last().height()/2}).trigger(e)

});
$(document).mouseup(function(e) {
		$('.widgetero .widget').draggable({ 
		distance: 0,
		containment: "window",
		stack:".widgetero .widget",
		cursor: "move", 
		snap: ".vidVidCustomizationMode, .widget", 
		snapMode: "both", 
		revert: 'invalid', 
		revertDuration: 100,
		snapTolerance: 10});

		if(snapping){
    		$('.widgetero .widget').draggable("option", "snap", ".vidVidCustomizationMode, .widget" );
		}else{
    		$('.widgetero .widget').draggable("option", "snap", false );
		}

		$('.vidVidCustomizationMode').droppable({
    		accept: '.widget',
    		  
    		drop: function(event, ui)
    		{        
    			ui.draggable.data('dropped', true);
				dropped = true; 
				$('.widgetero .widget').last().addClass("dropped")
				
		}})
		$('.trash').droppable({
    		accept: '.widget',
    		   tolerance: "fit",

    		drop: function(event, ui)
    		{        
    			ui.draggable.remove();

				
		}})
		
		$(".selectedWidget").resizable({

 handles: {
        'nw': '#nwgrip',
        'ne': '#negrip',
        'sw': '#swgrip',
        'se': '#segrip',
        'n': '#ngrip',
        'e': '#egrip',
        's': '#sgrip',
        'w': '#wgrip'
    },
  snapMode: "both", 
snapTolerance: 10

})

		if(snapping){
    		$('.selectedWidget').resizable("option", "snap", ".vidVidCustomizationMode, .widget" );
		}else{
    		$('.selectedWidget').resizable("option", "snap", false );
		}

		if(out){
			getActual().removeClass("selectedWidget");
			out = false;
		}else
		{
			
		getActual().addClass("selectedWidget");

		}
				

})
	var wasPlaying = false;
	$("#dots").on("click",function(){
		$("#Store").toggleClass("open");
		if(!$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open")){
			$("#index-trigger").children().removeClass("openedStore");
		$("#right-menu #dots").children().removeClass("openedStore");
		$("#right-menu").children().removeClass("openedStore");
		$(".back-arrow").removeClass("openedStore");
		$("#cover").addClass("open");

		}
		if(!$("#customizationBars").hasClass("open")){
			if(!player.paused() && $("#Store").hasClass("open")){
			player.pause();
			wasPlaying = true;
		}
		if(player.paused() && !$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open") && wasPlaying === true){
			player.play();
			wasPlaying = false;
		}
		}
		
		if($("#Store").hasClass("open")){
			$("#index-trigger").children().addClass("openedStore");
			$("#right-menu #dots").children().addClass("openedStore");
			$("#right-menu").children().addClass("openedStore");
			$(".back-arrow").addClass("openedStore");
			$("#cover").removeClass("open");

		}		

	});
	$("#customize").on("click",function(){
		if($("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			$("#customizationBars").removeClass("open")
		}
		$("#right-menu #customize").toggleClass("open");
		$("#customizationBars").toggleClass("open");

		if(!player.paused()){
			player.pause();
			wasPlaying = true;
		}
		else if(player.paused() && !$("#customizationBars").hasClass("open")&& wasPlaying === true){
			player.play();
			wasPlaying = false;
		}
				if($("#Store").hasClass("open")){
			$("#Store").removeClass("open");
			
		}
		if($("#Store").hasClass("open") && $("#customizationBars").hasClass("open")){
			$("#customizationBars").addClass("open")

		}		
		
if(!$("#Store").hasClass("open") && !$("#customizationBars").hasClass("open") ){
				$(".widgetero .widget").each(function(){
					$(this).css("width", ($(this).width()*2)+2)
					$(this).css("height", $(this).height()*2)
					$(this).css("left", parseInt($(this).css("left"))*2)
					$(this).css("top", (parseInt($(this).css("top"))*2)-49)

			})	
				
			$("#index-trigger").children().removeClass("openedStore");
			$("#right-menu #dots").children().removeClass("openedStore");
			$("#right-menu").children().removeClass("openedStore");
			$(".back-arrow").removeClass("openedStore");
			$("#cover").addClass("open");
				$("#example_video_1").removeClass("vidCustomizationMode");
$("#example_video_1").children().first().removeClass("vidVidCustomizationMode");
	$("#example_video_1").children().first().height( "100%")
		$(".vjs-progress-holder").removeClass("opened");

		}
		if($("#customizationBars").hasClass("open")){
		customizationMode();
	}
	});
	setInterval(function(){
        $("#index-menu.open").height(32* $("#index-menu.open > ul > a").length);

        if(player.paused()){
            $("#play").removeClass("playing")
        }else{
            $("#play").addClass("playing")
		}
		$("#example_video_1").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
		$("#customizationBars #actualStore").height($(window).height() - $("header").height() - 21);
		$("#customizationBars #actualStore #storeSection").width($(window).width() - $("#customizationBars #actualStore #storeList").width() - 87);
		$("#customizationBars #actualStore #storeSection").height($("#customizationBars #actualStore").height() - 80);
	

		if($("#profileSettings").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}if(!$("#profileSettings").hasClass("open") && ($("#Store").hasClass("open") || $("#customizationBars").hasClass("open"))){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
		}
        if(!$("#profileSettings").hasClass("open") && !($("#Store").hasClass("open") || $("#customizationBars").hasClass("open"))){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}
        
	}, 10);

	$("#profileTrigger").on("click",function(){
		
		$(".back-arrow").toggleClass("open");
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
	$('.widgets img').on('dragstart', function(event) { event.preventDefault(); });

	$("#customizationBars #list .tabs li").on("click",function(){
        if(!$(this).hasClass("actual")){
        	$("#customizationBars #list .tabs .actual").removeClass("actual");
        	$(this).addClass("actual")
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
function customizationMode(){
	$(".widgetero .widget").each(function(){
					$(this).css("width", ($(this).width()-2)/2)
					$(this).css("height", ($(this).height())/2)
					$(this).css("left", parseInt($(this).css("left"))/2)
					$(this).css("top", (parseInt($(this).css("top"))+49)/2)
			})	
	$("#example_video_1").children().first().addClass("vidVidCustomizationMode");
	a = $("#example_video_1").height()/$("#example_video_1").width()
	vidHeight = $(".vidVidCustomizationMode").height() +4;

	$("#example_video_1").addClass("vidCustomizationMode");

	$(".vidVidCustomizationMode").height( (a*$("#example_video_1").width()-3))
	$("#actions").height( $("#customizationBars").height()-(a*$("#example_video_1").width()-3)-$("#storeHeader").height()-30)
	w = $(".vidVidCustomizationMode").width();
	h = $(".vidVidCustomizationMode").height();

$(".back-arrow").addClass("openedStore");
$("#cover").removeClass("open");

$("#index-trigger").children().addClass("openedStore");
		$("#right-menu #dots").children().addClass("openedStore");
		$("#right-menu").children().addClass("openedStore");
		$(".vjs-progress-holder").addClass("opened");


	}
	function getActual (){

		  $(".selectedWidget").removeClass("selectedWidget");
$('.widgetero .widget').each(function(){
    var z = parseInt($(this).css('z-index'), 10);
    if ( z>maxz) {
    	maxz = z;
    	best= $(this)
    }

});
if(maxz == 0){
 return $('.widgetero .widget').last()
}else{
	maxz = 0;
		return best

	}

}

$(document).mouseup(function(e){
    var clickedOn = $(e.target);
    if (!clickedOn.parents().andSelf().is('.widget') && !clickedOn.parents().andSelf().is('input') &&!clickedOn.parents().andSelf().is('.resize')&&!clickedOn.parents().andSelf().is('.select')&&!clickedOn.parents().andSelf().is('.magnet')){
    	controls(e)
    	$(".selectedWidget").removeClass("selectedWidget");	
		out = true;	
    }else{
    	 controls(e)

    }
});

$('html').keyup(function(e){
    if(e.keyCode == 46){
    	$(".selectedWidget").remove()
    }
}) 

function controls(a){
	if ($(a.target).parents().andSelf().is(".delete")){
    	$(".selectedWidget").remove()
	}
	if ($(a.target).parents().andSelf().is(".select")){
    	$(".widget").addClass("select")
    	$(".select").addClass("on");
    	$(".resize").removeClass("on");
    	select = true
	}
	if ($(a.target).parents().andSelf().is(".resize")){
    	$(".widget").removeClass("select");
    	$(".resize").addClass("on");
    	$(".select").removeClass("on");
    	    	select = false


	}
	if ($(a.target).parents().andSelf().is(".cut")){
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop = parseInt($(".selectedWidget").css("top"), 10)
    	copiedLeft = parseInt($(".selectedWidget").css("left"), 10)
    	$(".selectedWidget").remove()

	}
	if ($(a.target).parents().andSelf().is(".copy")){
    	copiedWidget = $(".selectedWidget").html()
    	copiedTop = $(".vidVidCustomizationMode").height()/2-$(".selectedWidget").height()/2 + 48
    	copiedLeft = $(".vidVidCustomizationMode").width()/2-$(".selectedWidget").width()/2
	}
	if ($(a.target).parents().andSelf().is(".paste")){
		if(copiedWidget != undefined){
            	if(select){

            		$(".selectedWidget").removeClass("selectedWidget")
    				$(".widgetero").append('<div style="top: '+ copiedTop +'px;left: '+ copiedLeft +'px; z-index:1000" class="widget select selectedWidget dropped">'+copiedWidget+'</div>')
            	}else{
					$(".selectedWidget").removeClass("selectedWidget")
    				$(".widgetero").append('<div style="top: '+ copiedTop +'px;left: '+ copiedLeft +'px; z-index:1000" class="widget  selectedWidget dropped">'+copiedWidget+'</div>')
            	}
            }
}
	if ($(a.target).parents().andSelf().is(".magnet")){
    	$(".magnet").toggleClass("on");
    	if(snapping){
    		snapping = false;
    	}else{
    		snapping = true;
    	}

	}
}
 

  var ctrlDown = false;
    var ctrlKey = 17
    $(document).keydown(function(e)
    {
        if (e.keyCode == ctrlKey) ctrlDown = true;
            if (ctrlDown &&  e.keyCode == 67){
            	copiedWidget = $(".selectedWidget").html()
    			copiedTop = $(".vidVidCustomizationMode").height()/2-$(".selectedWidget").height()/2 + 48
    			copiedLeft = $(".vidVidCustomizationMode").width()/2-$(".selectedWidget").width()/2
            }
            if (ctrlDown &&  e.keyCode == 88){
            		copiedWidget = $(".selectedWidget").html()
    				copiedTop = parseInt($(".selectedWidget").css("top"), 10)
    				copiedLeft = parseInt($(".selectedWidget").css("left"), 10)
    				$(".selectedWidget").remove()
            }

    }).keyup(function(e)
    {
            if (ctrlDown &&  e.keyCode == 86){
            	if(copiedWidget != undefined){
            	if(select){

            		$(".selectedWidget").removeClass("selectedWidget")
    				$(".widgetero").append('<div style="top: '+ copiedTop +'px;left: '+ copiedLeft +'px; z-index:1000" class="widget select selectedWidget dropped">'+copiedWidget+'</div>')
            	}else{
					$(".selectedWidget").removeClass("selectedWidget")
    				$(".widgetero").append('<div style="top: '+ copiedTop +'px;left: '+ copiedLeft +'px; z-index:1000" class="widget  selectedWidget dropped">'+copiedWidget+'</div>')
            	}
            }
    }
}
    );

    