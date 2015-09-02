var $this

$(document).on("ready",function(){
    responsive()
    function openModal(a) {
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    var user = a.closest('.story').find(".username").html();
    $('.theater .comments .info .username').html(user);

    var time = a.closest('.story').find(".time").html();
    $('.theater .comments .info .time').html(time);

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    if (a.closest('.story').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    var pic = a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({"height":"100%"})
    }else{
                $("#bigPic").css({"height":"auto"})

    }
    $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      
        $("#theater").height($(window).height() - 40);

    $("#picContainer").width($("#bigPic").width());
    $("#theater .comments").height($("#theater").height() - 40);
    $("#theater .comments .more").height($("#theater .comments").height() - $("#theater .info").outerHeight(true) - $("#theater .comments .title").outerHeight(true) - $("#theater .comments .options").outerHeight(true));
   
    $("#theater").width($("#theater .comments").width() + 40 + $("#theater #picContainer").width());
}

function closeModal() {
    if ($('.theater .comments .options .bookmark').hasClass("true")) {
        $this.find('.options .bookmark').addClass("true");
    } else {
        $this.find('.options .bookmark').removeClass("true");
    }
    if ($('.theater .comments .options .star').hasClass("true")) {
        $this.find('.options .star').addClass("true");
    } else {
        $this.find('.options .star').removeClass("true");
    }
    $(".theater").css({
        "display": "none"
    })
}
		$('.knob').trigger(
        		'configure',
        		{   
        		    "fgColor":"#fff"
        		}
    		);
    
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
    
	$("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        if ($("#profileSettings").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        } else {
           $("header").removeClass("open");
           }
           if (!$("#profileSettings").hasClass("open") && !$("#Store").hasClass("open")) {
               $('.knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
            }
        });
 $(".story .pic").on("click", function () {
        openModal($(this))
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


	$("#profileTrigger").on("click",function(){
		$("#right-menu .index-arrow").toggleClass("open");
		$("#profileSettings").toggleClass("open");
		
	});
	
	
});

$( window ).on("resize", function(){
    responsive()
})
$( window ).on("load", function(){
    responsive()
})
function responsive(){
     $(".code-filler").width(function () {
    return $(this).parent().siblings("pre").find("code").width() + parseInt($(this).parent().siblings("pre").css("padding-left"))+ parseInt($(this).parent().siblings("pre").css("padding-right")) - 1
});
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
}