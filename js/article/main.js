var $this
$(document).on("ready",function(){
    function closeModal(){
        if( $('.theater .comments .options .bookmark').hasClass("true")){
            $this.find('.options .bookmark').addClass("true");
         }else{
             $this.find('.options .bookmark').removeClass("true");
             } 
        if( $('.theater .comments .options .star').hasClass("true")){
            $this.find('.options .star').addClass("true");
         }else{
             $this.find('.options .star').removeClass("true");
             } 
		$(".theater").css({
            "display":"none"
        })
        }
		$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
	var wasPlaying = false;
    
    $(".star").on("click",function(){
		 $(this).toggleClass("true")
	});
    $(".bookmark").on("click",function(){
		 $(this).toggleClass("true")
	});
    
     $(".options.first .bookmark").on("click",function(){
        $('.options.ending .bookmark').toggleClass("true")
          
	});
    $(".options.ending .bookmark").on("click",function(){
        $('.options.first .bookmark').toggleClass("true")
          
	});
    
     $(".options.first .star").on("click",function(){
        $('.options.ending .star').toggleClass("true")
          
	});
    $(".options.ending .star").on("click",function(){
        $('.options.first .star').toggleClass("true")
          
	});
    
	$("#dots").on("click",function(){
		$("#Store").toggleClass("open");
		$("#index-trigger").children().toggleClass("openedStore");
		$("#right-menu #dots").children().toggleClass("openedStore");
		$("#right-menu").children().toggleClass("openedStore");
	});
$(".story .pic").on("click",function(){
    $this = $(this).parent();
        
        var source = $(this).attr('src');
        $('.theater #bigPic').attr('src', source);

        var user = $(this).parent().find(".username").html();
        $('.theater .comments .info .username').html(user);
    
        var time = $(this).parent().find(".time").html();
        $('.theater .comments .info .time').html(time);
    
        var title = $(this).parent().find(".title").html();
        $('.theater .comments .title').html(title);
        
         if($(this).parent().find(".options .bookmark").hasClass("true")){
            $('.theater .comments .options .bookmark').addClass("true");
         }else{
             $('.theater .comments .options .bookmark').removeClass("true");
             } 
        if($(this).parent().find(".options .star").hasClass("true")){
            $('.theater .comments .options .star').addClass("true");
         }else{
             $('.theater .comments .options .star').removeClass("true");
             }
    
        var pic = $(this).parent().find(".info img").attr('src');
        $('.theater .comments .info #pic').attr('src', pic);
		
        var ref = $(this).parent().find(".options ul a").attr('href');
         $('.theater .comments .options ul a').attr('href', ref);
    
        $("#theater").addClass("animated fadeIn ")
        $(".theater").css({
            "display":"block"
        })
	});
    
    $("#close").on("click",function(){
         
        closeModal() 
	});
    
    $("#wrapper").on("click",function(){
         closeModal() 
	});
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            closeModal()        
        }
    };
	setInterval(function(){
        
        $("#article").width($(window).width()- $("#sidebar").outerWidth(true) );
        $("#theater .comments").height($("#theater").height()- 40 );
        $("#theater .comments .more").height($("#theater .comments").height()- $("#theater .info").outerHeight(true)  - $("#theater .comments .title").outerHeight(true) -  $("#theater .comments .options").outerHeight(true));
        $("#theater").width($("#theater .comments").width()+ 40 + $("#theater img").width() );
        $("#theater").height($(window).height()-40);
		$("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#sidebar").height($(window).height() - 46);
		$("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
		$("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        if($("#profileSettings").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}if($("#Store").hasClass("open")){

            $("header").addClass("open");
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
		}else{
            $("header").removeClass("open");
        }   
        if(!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}

        if($("#profileSettings").hasClass("open") && $("#Store").hasClass("open")){
			$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#2ecc71"
        		}
    		);
		}
	}, 1);

	$("#profileTrigger").on("click",function(){
		$("#right-menu .index-arrow").toggleClass("open");
		$("#profileSettings").toggleClass("open");
		
	});
	
	
});

