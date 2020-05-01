// $(function() {
//     /**
//     * Smooth scrolling to a specific element 
//     **/
//     function scrollTo( target ) {
//         if( target.length ) {
//             $("html, body").stop().animate( { scrollTop: target.offset().top }, 1500);
//         }
//     }
//     // exemple
//     scrollTo( $("#contact") );
// });


  $(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 1050; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top -76 }, speed ); // Go
      return false;
    });
  });


















// Ancienne annimation pour le scoll de la navBar
// (function($) {
//   "use strict"; // Start of use strict

//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 56)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });

//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });

//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 56
//   });

// })(jQuery); // End of use strict