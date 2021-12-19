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
      $el.css({'position': 'fixed', 'top': '0px', 'right': '0px', 'left': '0px', 'z-index': '200'}); 
    }
    if ($(this).scrollTop() < 90 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  });

$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});	
function opensearch()
{
  $(".search-header").addClass("search-open");
}
function closesearch()
{
  $(".search-header").removeClass("search-open");
}
function dismiss_Preloader() {
  // setTimeout(function () {
    
  // }, 3000);
  $(".preloader").css('display','none');
}
