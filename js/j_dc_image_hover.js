 
 (function($) {
    
    $.fn.j_dc_image_hover_func = function(effect) {
 
               
                    switch (effect) {
                        case "opacity":{
                              $(this).find("div.j_dc_image_hover_image_div").addClass("opacity_effect");
                             break;
                        }
                        case "zoom_out":{
                        $(this).find("div.j_dc_image_hover_image_div").addClass("zoom_out_effect");
                         break;
                        }
                         case "zoom_in":{
                         $(this).find("div.j_dc_image_hover_image_div").addClass("zoom_in_effect");
                         break;
                        
                        }
                    
                    }
                  
                   
               
                
        
           $( ".j_dc_image_hover_image_div" ).hover(
                function() {
               
                   
                   //t_alt=$( this ).attr("alt");
                   top_element=$( this ).position().top +($( this ).height()/2-30);
                   left_element=$( this ).position().left+10;
                   $( this ).children("a").css({"top":top_element,"left":left_element});
                    $( this ).children("a").fadeIn(1000);
                   
                }, function() {
                   $( this ).children("a").fadeOut("fast");
                });
  
         }
         
         }(jQuery));