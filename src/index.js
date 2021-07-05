import './styles/main.scss'
import './styles/main.less'
import 'popper.js'
import 'bootstrap'
import './js/timeline.js'
import AOS from 'aos'
import $ from 'jquery'
window.$ = window.jQuery = $
import jQueryBridget from 'jquery-bridget'
import Isotope from 'isotope-layout'

!(function($) {
  "use strict";

  // make Isotope a jQuery plugin
  jQueryBridget( 'isotope', Isotope, $ );

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

})(jQuery);