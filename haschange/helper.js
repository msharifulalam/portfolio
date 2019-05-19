var helper = (function($, alertify, emailjs){

	// mute 
	function mute(){
		return false;
	}
	// mute

	// contact form
	function contactMail(){

		$('#myForm').submit(function(e){
			e.preventDefault();

			var Mname = document.getElementById('inputName'),
				Memail = document.getElementById('inputEmail'),
				MtoName = document.getElementById('toName'),
				Mmessage = document.getElementById('inputMessage');

			if(!Mname.value || !Memail.value || !MtoName.value || !Mmessage.value){
				alertify.error("Please check your entries.");
			}else{
				var template_params = {
					"reply_to": "info.sharifulalam@gmail.com",
					"from_name": Mname.value,
					"from_email": Memail.value,
					"to_name": MtoName.value,
					"message_html": Mmessage.value
				}

				var service_id = "default_service";
				var template_id = "template_8Cgb6GOK_clone";
				emailjs.send(service_id, template_id, template_params);

				$(this).get(0).reset();
				alertify.success("Message successfully has been sent.");
			}

			return false;
		});
		
		(function(){
			emailjs.init("user_M8xb0eFkBVi2fQ1rKA1DD");
		})();

	}
	// contact form

	// Owl-carousel
	function owlslider(){
        var owl = $("#owl-demo");
        owl.owlCarousel({
            item : 1,
            navigation : false,
            singleItem : true,
            transitionStyle : "goDown",
            autoPlay : true,
            loop : true,
            pagination : false,
            autoWidth: true
        });
        var owl = $("#owl-example");
        owl.owlCarousel({
            item : 1,
            navigation : true,
            singleItem : true,
            transitionStyle : "goDown",
            autoPlay : true,
            loop : true,
            pagination : false,
            autoWidth: true,
            nav: true,
            navContainer: true,
            navContainer: '#customNav',
            navigationText: ["<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"],
        });
    }
    // Owl-carousel

    // skills
    function skills(){
		// tooltip
		$('.popOver').tooltip({trigger: 'manual'}).tooltip('show');
		//bar-width
		$('.others-section > .content-wrapper').scroll(function() {   
			if($('.skills').length == true){
			  	if($(window).scrollTop() > $('.skills').offset().top - ($(window).height())){
			  		
			  		$(".progress-bar").each(function(){
					    var each_bar_width = $(this).attr('aria-valuenow');
					    $(this).width(each_bar_width + '%');
					});
			  		
					// skillsTestimonial();
			  	}
			}
		});
	};
    // skills

    // masonary
    function masonary(){

    	// ajax-loader
		$('.ajax-loader').hoverdir({
	        hoverDelay: 75
	    });

	    // lightBox
		$(".gallery a[rel^='prettyPhoto']")
			.prettyPhoto({animation_speed:'fast', slideshow:10000, hideflash: true});

		// init Isotope
		var $grid = $('.grid').isotope({
	        // options
	        itemSelector: '.grid-item',
	        layoutMode: 'packery',
	        percentPosition: true,
	        masonry: {
	            columnWidth: '.grid-item'
	        },
	        packery: {
	            gutter: 15
	        }
	    });

	    // filter items on button click
	    $('.collapsed').on( 'click', 'button', function() {
	        var filterValue = $(this).attr('data-filter');
	        $grid.isotope({ filter: filterValue });
	    });
	}
    // masonary

	return {
		owlslider : owlslider,
		skills: skills,
		masonary: masonary,
		mute: mute,
		contactMail: contactMail,
	};
	
})(jQuery, alertify, emailjs);