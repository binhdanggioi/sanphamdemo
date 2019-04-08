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
/*style sub-img*/
$(document).ready(function(){
    var src_img_click;
    $(".list-products-item .small-img a").click(function(){
        src_img_click = $(this).children('img').attr('src');
        console.log(src_img_click);
        $("#widget-products-1").attr('src', src_img_click);
        return false;
    });
});
$(document).ready(function(){
    $("li.list-items").hover(
        function(){
        $(this).css("color", "red");
    },function(){
        $(this).css("color", "black");
});
});