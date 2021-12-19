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
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/61bf700f80b2296cfdd27015/1fn9srfmf';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();

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
  
    $(".preloader").css('display','none');
  
}

