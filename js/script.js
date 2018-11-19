$(function() {
   /* START Dropdown */
   var x, i, j, selElmnt, a, b, c;
   /*look for any elements with the class "custom-select":*/
   x = document.getElementsByClassName("custom-select");
   for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 0; j < selElmnt.length; j++) {
         /*for each option in the original select element,
         create a new DIV that will act as an option item:*/
         c = document.createElement("DIV");
         c.innerHTML = selElmnt.options[j].innerHTML;
         c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
               if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  for (k = 0; k < y.length; k++) {
                     y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
               }
            }
            h.click();
         });
         b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
         /*when the select box is clicked, close any other select boxes,
         and open/close the current select box:*/
         e.stopPropagation();
         closeAllSelect(this);
         this.nextSibling.classList.toggle("select-hide");
         this.classList.toggle("select-arrow-active");
      });
   }

   function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
         if (elmnt == y[i]) {
            arrNo.push(i)
         } else {
            y[i].classList.remove("select-arrow-active");
         }
      }
      for (i = 0; i < x.length; i++) {
         if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
         }
      }
   }
   /*if the user clicks anywhere outside the select box,
   then close all select boxes:*/
   document.addEventListener("click", closeAllSelect);
   /* END Dropdown */

   
   $("#add_file").mouseover(function(event) {
      $(this).parent().children('input').mouseover();
   });
   $("#add_file").click(function(event) {
      $(this).parent().children('input').click();
   });
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
      $('html').toggleClass('mm-wrapper_opening');      
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
   $(".accordion").click(function(event) {
      /* Act on the event */
      $(this).parent().children('.panel').slideToggle();
   });
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