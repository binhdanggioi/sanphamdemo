$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:1,
});
$('.owl-carousel').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.owl-carousel').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
});
/* style method hover*/
$(document).ready(function(){
    $("li.list-items").hover(
        function(){
        $(this).css("color", "yellow");
    },function(){
        $(this).css("color", "black");
});
});
/*end style method hover*/
/*style back to top*/
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#goTop').fadeIn(); 
        } else { 
            $('#goTop').fadeOut(); 
        } 
    }); 
    $('#goTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
/*end style back to top*/
