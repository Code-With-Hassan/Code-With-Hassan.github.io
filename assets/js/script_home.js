$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
$(window).scroll(function(e){ 
    var $el = $('.fixedElement'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 90 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px', 'right': '0px', 'left': '0px', 'z-index': '4'}); 
    }
    if ($(this).scrollTop() < 90 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  });
$('#cart-plus').click(function () {
  var i = parseInt($('.qty').html());
  i++;
  $('.qty').html(i);
});
$('#cart-minus').click(function () {
  var i = parseInt($('.qty').html());
  if(i > 0)
    i--;
  $('.qty').html(i);
});
$('#remove').click(function () {

  $('.cart-items-1').remove();
})

// $(document).ready(function(){
// 	$(".wish-icon i").click(function(){
// 		$(this).toggleClass("fa-heart fa-heart-o");
// 	});
//     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//     (function(){
//       var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//       s1.async=true;
//       s1.src='https://embed.tawk.to/61bf700f80b2296cfdd27015/1fn9srfmf';
//       s1.charset='UTF-8';
//       s1.setAttribute('crossorigin','*');
//       s0.parentNode.insertBefore(s1,s0);
//     })();

// });	
function opensearch()
{
  $(".search-header").addClass("search-open");
}
function closesearch()
{
  $(".search-header").removeClass("search-open");
}
function closeOffcanvas() {
  document.getElementsByTagName('body')[0].classList.toggle('nav-open');
}
function dismiss_Preloader() {
  // setTimeout(() => {  
  //   $(".preloader").css('display','none');
  //  }, 1000);
   $(".preloader").css('display','none');
}
$(document).ready(function() {
  var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}
});

(function ($) {
  "use strict";
  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }
      return check;
  });

  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }
  function showValidate(input) {
      var thisAlert = $(input).parent();
      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
})(jQuery);