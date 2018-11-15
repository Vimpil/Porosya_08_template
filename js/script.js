$(function() {
   $('nav#menu').mmenu({
      extensions: ["widescreen"],
      drag: true,
      pageScroll: {
         scroll: true,
         update: true
      },
      // extensions: {
      //    'all': ['pagedim-white'],
      //    '(min-width: 400px)' : ['pagedim-black']
      // },
      sidebar: {
         expanded: 800
      }
   });
   $("#my-header").mhead({
      scroll: {
         hide: 200
      }
   });
   $("#my-header:not(.mm-sticky)").mhead({
      scroll: false
   });
   /* Corrects to mmenu */
   var width = $(window).width();
   if ($(window).width() >= 799) {
      $('html').toggleClass('mm-wrapper_sidebar-expanded mm-wrapper_opened mm-wrapper_blocking mm-wrapper_background mm-wrapper_opening');
      $('#menu').toggleClass('mm-menu mm-menu_offcanvas mm-menu_sidebar-expanded mm-menu_opened mm-menu_widescreen');
      console.log("after_toggle");
      $('html').toggleClass('mm-wrapper_opening');
      console.log('second_toggle');
   }
   $(window).on('resize', function() {
      if ($(window).width() >= 799) {
         $('html').toggleClass('mm-wrapper_sidebar-expanded mm-wrapper_opened mm-wrapper_blocking mm-wrapper_background mm-wrapper_opening');
         $('#menu').toggleClass('mm-menu mm-menu_offcanvas mm-menu_sidebar-expanded mm-menu_opened mm-menu_widescreen');
         $('html').toggleClass('mm-wrapper_opening')
      }
   });
   $('#my-header a').click(function(event) {
      /* Act on the event */
      if ($(window).width() >= 799) {
         console.log("clicked");
         $('html').toggleClass('mm-wrapper_sidebar-expanded mm-wrapper_opened mm-wrapper_blocking mm-wrapper_background mm-wrapper_opening');
         $('#menu').toggleClass('mm-menu mm-menu_offcanvas mm-menu_sidebar-expanded mm-menu_opened mm-menu_widescreen');
         $('html').toggleClass('mm-wrapper_opening')
      }
   });

   /* END Corrects to mmenu */

});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
   document.getElementById("myMainDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
   $('.dropbtn i.fa').toggleClass('fa-caret-down');
   $('.dropbtn i.fa').toggleClass('fa-caret-up');
   if (!e.target.matches('.dropbtn')) {

      var myMainDropdown = document.getElementById("myMainDropdown");
      if (myMainDropdown.classList.contains('show')) {
         myMainDropdown.classList.remove('show');

      }
   }
}
jQuery(document).ready(function($) {
   $('.gallery-item').magnificPopup({
      type: 'image',
      gallery: {
         enabled: true
      },
  callbacks: {
    
    buildControls: function() {
      // re-appends controls inside the main container
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }
     } 
   });
});