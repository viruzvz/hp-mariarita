import './styles/main.scss'
import './styles/main.less'
import 'popper.js'
import 'bootstrap'
import './js/timeline.js'

import AOS from 'aos'
import $ from 'jquery'
window.$ = window.jQuery = $
import jQueryBridget from 'jquery-bridget'
import 'owl.carousel'
import Isotope from 'isotope-layout'
import venobox from 'venobox'
import 'jquery-ui'

!(function($) {
  "use strict"

  // make Isotope a jQuery plugin
  jQueryBridget( 'isotope', Isotope, $ )

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    })

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active')
      $(this).addClass('filter-active')

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      })
      aos_init()
    })
    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out-back",
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox()
    })
  })

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo')
      }
    }
  })

  // Navigation active state on scroll
  var nav_sections = $('section')
  var main_nav = $('.nav-menu')

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight()

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active')
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active')
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active')
      }
    })
  })

  // carousel portfolio
  $('.owl-carousel').owlCarousel({
    navigation : true, 
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
    pagination: true,
    rewindSpeed: 500
  })

})(jQuery)