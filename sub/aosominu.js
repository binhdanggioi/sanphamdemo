// $(document).ready(function() {
//     $("#content").find("[id^='tab']").hide();
//     $("#tabs li:first").attr("id","current"); 
    
//     $('#tabs a').click(function(e) {
//         e.preventDefault();
//         if ($(this).closest("li").attr("id") == "current"){ 
//          return;       
//         }
//         else{             
//           $("#content").find("[id^='tab']").hide(); 
//           $("#tabs li").attr("id",""); 
//           $(this).parent().attr("id","current"); 
//           $('#' + $(this).attr('name')).fadeIn();
//         }
//     });
// });
