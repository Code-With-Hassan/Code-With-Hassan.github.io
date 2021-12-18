$(document).ready(function() {
    $Select = 0;
    var divWidth = $(".side-one").width();
    var divWidth1 = $(".side-two").width();
    $(".side-one").mouseenter(function(){
        if ($Select == 0) {
            $(this).width("80%");
            $(".side-two").width( "20%");
            $(".side-two .floating-container .placeholder h1").css({'transform' : 'rotate(-90deg)'});
        }
    }).mouseleave(function(){
        if ($Select == 0) {
            $(this).width("50%");
            $(".side-two").width( "50%");
            $(".side-two .floating-container .placeholder h1").css({'transform' : 'rotate(0deg)'});
        }
    }).mousedown(function () {
        $Select = 1;
        $(this).width("90%");
        $(".side-two").width( "10%");
        $(".side-two .floating-container .placeholder h1").css({'transform' : 'rotate(-90deg)'});
        $(".side-one .floating-container .placeholder h1").css({'transform' : 'rotate(0deg)'});
    });
    $(".side-two").mouseenter(function(){
        if ($Select == 0) {
            $(this).width("80%");
            $(".side-one").width( "20%");
            $(".side-one .floating-container .placeholder h1").css({'transform' : 'rotate(-90deg)'});

        }
    }).mouseleave(function(){
        if ($Select == 0) {
            $(this).width("50%");
            $(".side-one").width( "50%");
            $(".side-one .floating-container .placeholder h1").css({'transform' : 'rotate(0deg)'});
        }
    }).mousedown(function() {
        $Select = 1;
        $(this).width("90%");
        $(".side-one").width( "10%");
        $(".side-one .floating-container .placeholder h1").css({'transform' : 'rotate(-90deg)'});
        $(".side-two .floating-container .placeholder h1").css({'transform' : 'rotate(0deg)'});
    });
    console.log(divWidth);
    // if (divWidth < 1450) {
    //     $(".side-img").css({'display' : 'none'});
    // }
});