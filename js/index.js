 $(document).ready(function(){       
        var scroll_pos = 0;            
        scroll_pos = $(this).scrollTop();
		changeBackground(scroll_pos);        
        $(document).scroll(function() {
        	scroll_pos = $(this).scrollTop();
        	changeBackground(scroll_pos)
        });
        
});

 function changeBackground(scroll_pos) {
    if(scroll_pos > 50) {
            $(".navbar").addClass('dark');
        } else {
            $(".navbar").removeClass('dark');
    }
 }


// ( function( $ ) {
//     // Init Skrollr
//     var s = skrollr.init({
//         render: function(data) {
//             //Debugging - Log the current scroll position.
//             //console.log(data.curTop);
//         }
//     });
// } )( jQuery );