(function(helper) {
    'use strict';


    // Menu Dynamic
    function init() {
        // Router 
        new Router([
            new Route('index', 'home.html', helper.owlslider, true),
            new Route('portfolio', 'portfolio.html', helper.masonary),
            new Route('about', 'about.html', helper.skills),
            new Route('contact', 'contact.html', helper.contactMail),
        ]);
    }
    init();
    // Menu Dynamic

    // Show hide sidebar menu
    // Let this snippet run before your hashchange event binding code


    $('.mobile_menu').on('click', function(e) {
        e.preventDefault();

        $('.sidebar-left-content').toggleClass('hidden-xs visible-xs');

        $('#pagingbita').click(function(e) {
            $('.sidebar-left-content').removeClass('visible-xs').addClass('hidden-xs');
        });

    });

    // state functions
    // function hashpages(){
    //        $("#pagingbita").addHash("index", "index-content.html", function(){
    //        	owlslider();
    //        });
    //        $("#pagingbita").addHash("about", "about.html", function(){
    //        	skillsTestimonial();
    //        });
    //        $("#pagingbita").addHash("portfolio", "portfolio.html", function(){
    //        	gridLightBoxMasonary();
    //        });
    //        $().watch();
    //    };

    //    hashpages();


    //   function init() {
    // var router = new Router([
    //     new Route('index', 'index-content.html', true),            
    //     new Route('about', 'about.html'),
    //     new Route('portfolio', 'portfolio.html')
    // ]);
    //   }
    //   init();


    function menuOpenDrop() {

        $('.menu-open li').has('ul').addClass('parentSub'); //adding class to has drop li
        $('.menu-open li > ul').addClass('drophas'); //adding class to dropdown ul

        //clicking the parent li a
        $('.parentSub > a').on('click', function() {
            var textCont = $(this).text();
            // console.log(textCont);
            //creating anchor and prepend to submenu
            var anchor = $('<a>').html(function() {
                return "&leftarrow; " + textCont;
            });
            anchor.attr({ "class": "back", "data-hover": anchor.text() });
            var li = $('<li>').html(anchor);

            //this is only for the clicked current element
            $(this).siblings('ul').addClass('submenu'); //adding class to its siblings ul
            $('.menu-open').animate({ 'left': '-250px' }); //main-menu changing position
            if ($('.submenu').find('li:first > a.back').length) return;
            li.prependTo($('ul.submenu'));

            //clicking the dropdown ul li a:first-child
            $('a.back').on('click', function() {
                $('.drophas').removeClass('submenu'); //remove class which before added
                $('.menu-open').animate({ 'left': '0px' }); //main-menu changing position
            });

        });

    }
    menuOpenDrop();

    function menuclicker() {
        $('.menu-open').find('a').on('click', function(e) {
            $(this).parent('li').siblings('li').find('a').removeClass('current_menu_item');
            $(this).addClass('current_menu_item');

        });
    }
    menuclicker();

    //hover effect for menu
    function hover(ulli) {
        $(ulli).find('a').on('mouseover', function() {
            var text = $(this).text();
            $(this).attr('data-hover', text);
        });
    }
    hover('.menu-open li');


    $(window).on('load resize', function() {
        var winHeight = $(window).height();
        if (winHeight < 585) {
            $('.scroll-menu').css({ 'overflow': 'scroll', 'padding-right': '8px' });
        } else {
            $('.scroll-menu').css({ 'overflow': 'hidden', 'padding-right': '0px' });
        }
    });


    //sidebar active and disactive
    $('.sidebar-btn').on('click', function(event) {
        $('.primary-sidebar').addClass('sideshow');
        $('.sidebar-btn2').on('click', function() {
            $('.primary-sidebar').removeClass('sideshow');
        });
    });




    //count number up
    if ($('.single-part-achivement').find('span.count').length) {
        var count1 = $('#count1').text();
        var count2 = $('#count2').text();
        var count3 = $('#count3').text();
        var count4 = $('#count4').text();
        var options = {  
            useEasing: true,
              useGrouping: true,
              separator: ',',
              decimal: '.',
              prefix: '',
              suffix: ''
        };
        var demo1 = new CountUp("count1", 0, count1, 0, 5, options);
        var demo2 = new CountUp("count2", 0, count2, 0, 5, options);
        var demo3 = new CountUp("count3", 0, count3, 0, 5, options);
        var demo4 = new CountUp("count4", 0, count4, 0, 5, options);
        demo1.start();
        demo2.start();
        demo3.start();
        demo4.start();
    }

    function loadExternalOnlyMobile() {
        if (window.matchMedia('(max-width: 767px)').matches === true) {
            let arr = [],
                c = 0;
            $(".ajax-loader").click((e) => {
                e.preventDefault();
                c++;
                arr.push(e.currentTarget.href);
                console.log("C is: " + c);
                if (c === 2 && arr[0] === e.currentTarget.href) {
                    console.log(arr[0]);
                    console.log("Success!");
                    return false;
                } else {
                    c = 1;
                    arr[0] = e.currentTarget.href;
                    return false;
                }
            });
        }
    }

    $(window).on("load resize", loadExternalOnlyMobile);



}(helper));
