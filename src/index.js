import _ from 'lodash';
import './style.scss';
import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';
import {MDCFloatingLabel} from '@material/floating-label';
import {MDCLineRipple} from '@material/line-ripple';
import Typed from 'typed.js';

// Can also be included with a regular script tag




(function ($) {
	
	"use strict";

	// Header Scrolling Set White Background
	scrollNavBar();

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 30
				}, 700);
				return false;
			}
		}
	});



	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Blog cover image
	if($('.blog-post-thumb').length){
		$('.blog-post-thumb .img').imgfix();
	}


	// About Us Image
	if($('.about-image').length){
		$('.about-image').imgfix({
			scale: 1.1
		});
	}


	// Page standard gallery
	if($('.page-gallery').length && $('.page-gallery-wrapper').length){
		$('.page-gallery').imgfix({
			scale: 1.1
		});

		$('.page-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
			}
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				// Home Parallax
				if($('#parallax-text').length){
					$('#parallax-text').parallax({
						imageSrc: 'assets/images/photos/parallax-counter.jpg',
						zIndex: '1'
					});
				}

				// Home Parallax Counter
				if($('#counter').length){
					$('#counter').parallax({
						imageSrc: 'assets/images/photos/parallax-counter.jpg',
						zIndex: '1'
					});
				}
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Header Scrolling Set White Background
	$(window).on('scroll', function() {
		scrollNavBar();
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


	// Navbar Scroll Set White Background Function
	function scrollNavBar() {
		var width = $(window).width();
		if(width > 991) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
			}else{
				$(".header-area").removeClass("header-sticky");
			}
		}
	}


})(window.jQuery);

// material design

const ripple = [].map.call(document.querySelectorAll('.features-small-item'), function(el) {
  return new MDCRipple(el);
});

const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
  return new MDCRipple(el);
});

// caraousel

$('.carousel').carousel();

// svg transform

(function () {
    var a = function (a) {
            return document.querySelector(a)
        },
        t = document.querySelectorAll(".monitorContentGroup path");
    a(".monitorGroup");
    var f = a(".monitorScreen"),
        g = a(".monitorLogo"),
        h = a(".monitorStand"),
        u = a(".monitorStandShadow"),
        c = a(".monitorBottom"),
        v = a(".monitorEdge"),
        C = document.querySelectorAll(".laptopContentGroup path"),
        w = a(".laptopContentGroup"),
        x = a(".laptopGroup"),
        d = a(".laptopScreen"),
        k = a(".laptopEdgeLeft"),
        l = a(".laptopEdgeRight"),
        m = a(".laptopTrackpad"),
        n = a(".laptopBase");
    document.querySelectorAll(".tabletContentGroup path");
    var e = a(".tabletContentGroup"),
        b = a(".tabletGroup"),
        p = a(".tabletButton"),
        q = a(".tabletCamera"),
        y = a(".tabletScreen"),
        r = a(".phoneGroup"),
        z = a(".phoneButton"),
        A = a(".phoneCamera"),
        a = a(".phoneSpeaker");
    TweenMax.set([c], {
        transformOrigin: "50% 100%"
    });
    TweenMax.set([h, n, y], {
        transformOrigin: "50% 0%"
    });
    TweenMax.set([g, f, d, m, b, x, p, q, e, z, A, a, w, r], {
        transformOrigin: "50% 50%"
    });
    TweenMax.set([k, l], {
        transformOrigin: "0% 100%"
    });
    TweenMax.set(b, {
        rotation: -90
    });
    var B = new TimelineMax({
        repeat: -1,
        delay: 1,
        yoyo: !1,
        paused: !1
    });
    B.timeScale(3);
    B.from(c, 1, {
        scaleY: 0,
        ease: Power1.easeOut
    }).from(h, 1, {
        y: -70,
        ease: Power1.easeOut
    }, "-=1").from(u, .5, {
        alpha: 0,
        ease: Power1.easeIn
    }, "-=0.5").from(v, 1, {
        y: 330
    }, "-=0.25").from(f, 2, {
        y: 330,
        ease: Power1.easeOut
    }, "-=1").staggerFrom(t, 1, {
        scaleX: 0
    }, .1, "-=0.51").from(g, 1, {
        scale: 0,
        ease: Back.easeOut.config(2)
    }).staggerTo(t, 1, {
        alpha: 0,
        delay: 2
    }, .1).to(f, 1, {
        y: 330,
        ease: Power1.easeIn
    }, "-=1").to(v, 1, {
        y: 330,
        ease: Power1.easeIn
    }, "-=0.75").to(c, 1, {
        scaleX: .69,
        y: -23
    }).to(c, 1, {
        scaleY: .45,
        alpha: 1
    }, "-=1").set(c, {
        alpha: 0
    }).to(g,
        .5, {
            scale: 0,
            ease: Back.easeIn
        }, "-=1").to(h, 1, {
        y: -120
    }, "-=1.5").to(u, .5, {
        alpha: 0
    }, "-=1.5").from(n, 1, {
        alpha: 0
    }, "-=1").from(m, 1, {
        scaleX: 0
    }, "-=1").from(d, 1, {
        scale: 0,
        ease: Back.easeOut.config(.5)
    }).from(k, 2, {
        skewX: -40,
        scaleY: 0,
        ease: Power3.easeOut
    }, "-=2").from(l, 2, {
        skewX: 40,
        scaleY: 0,
        ease: Power3.easeOut
    }, "-=2").staggerFrom(C, 1, {
        scaleX: 0
    }, .1).to(m, .3, {
        alpha: 0,
        delay: 2
    }).to(d, 1, {
        scaleX: .67
    }).to(d, 1, {
        scaleY: .8
    }, "-=1").to(w, 1, {
        alpha: 0,
        scale: .5
    }, "-=1").to(n, 1, {
        y: -20,
        scaleX: 0
    }, "-=1").to(k, 1, {
        x: 40,
        transformOrigin: "50% 50%",
        scaleY: .85
    }, "-=1").to(l, 1, {
        x: -40,
        transformOrigin: "50% 50%",
        scaleY: .85
    }, "-=1").set(x, {
        alpha: 0
    }).from(b, 1, {
        scale: 1.1,
        alpha: 0
    }, "-=1").to(b, 2, {
        rotation: 0,
        delay: 2,
        ease: Anticipate.easeOut
    }).staggerFrom([p, q], .5, {
        scale: 0,
        ease: Back.easeOut
    }, .1, "-=1").from(e, 2, {
        rotation: 90,
        scaleX: 1.33,
        scaleY: .8,
        ease: Power3.easeInOut
    }, "-=0").to([p, q], .5, {
        scale: 0,
        delay: 2
    }).to(b, 1, {
        scaleX: .45
    }).to(b, 1, {
        scaleY: .7
    }, "-=1").to(e, 1, {
        y: -5
    }, "-=1").to(y, .5, {
        scaleY: .92,
        y: 4
    }, "-=0.5").set(r, {
        alpha: 1
    }).set([b, e], {
        alpha: 0
    }).staggerFrom([z,
A, a], 1, {
        scale: 0,
        ease: Back.easeOut
    }, .1).to(r, 2, {
        y: 80,
        delay: 2,
        ease: Back.easeIn.config(2)
    });
    TweenMax.set("svg", {
        visibility: "visible"
    })
})();

// typewriter effect


var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    typeSpeed: 40
  });
