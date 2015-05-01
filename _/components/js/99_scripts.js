/*jslint browser: true*/
/*global $, jQuery, alert, console, Modernizr, Waypoint*/

$(document).ready(function () {
	"use strict";
  
  (function initWaypoints() {
    var waypoints = $('.hero').waypoint({
      offset: -1,
      handler: function (direction) {
        if (direction === 'down') {
          $('header.main').addClass('fixed');
        } else {
          $('header.main').removeClass('fixed');
        }
      }
    }),
    
      sectionWaypoint = $('section').waypoint({
        handler: function (direction) {

        }
      });
  }());
  
  // subnav waypoints
	(function initScrollingSubnav() {
		var scrollBtn = $('.scroll-trigger, .main-navigation li a, #mobmenu li a');
		scrollBtn.on('click', function (e) {
			e.preventDefault();
			// add/remove active class from btn
			scrollBtn.removeClass('active');
			$(this).addClass('active');
			// retrieve href value to match anchor id
			var getHref = $(this).attr('href').split("#"),
				href = getHref[getHref.length - 1];
			$("#" + href).velocity('scroll', 1000);
		});
	}());
  
  // hero slider
  (function initSlickCarousel() {
    $('.slick').slick({
      autoplay: true,
      arrows: false,
      draggable: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      touchMove: false,
      pauseOnHover: false
    });
  }());
  
  // init mobile menu
  (function initMobMenu() {
    $('#mobmenu').css('visibility', 'visible');
    $("#mobmenu").mmenu({
      // options
    }, {
      // configuration
      offCanvas: {
        pageNodetype: "div"
      }
    });
    
    // When the browser / device is resized, the menu will close
    var API = $("#mobmenu").data("mmenu");
		$(window).resize(function () {
		  API.close();
		});
  }());
  
});
