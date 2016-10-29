$(function() {
	$('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('select').selectbox();

				$('.niceCheck').mousedown(
					function() {
						changeCheck($(this));
					}
				);

        $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );

			// $('.sub-menu li').mouseenter(
			// 	function() {
			// 		$(this).animate({
			// 			background-color: rgb(169, 58, 58),
			// 		}, 500);
			// 	}
			// );
			//
			// $('.sub-menu').mouseleave(
			// 	function() {
			// 		$(this).animate({
			// 			background-color: rgb(225,75,75),
			// 		}, 500);
			// 	}
			// );


});
