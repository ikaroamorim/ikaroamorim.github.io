$(document).ready(function () {
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).innerHeight()){
            $("#navbar").addClass("nav-fixed");
            $("#menumobile").addClass("nav-fixed");
        }else{
            $("#navbar").removeClass("nav-fixed");
            $("#menumobile").removeClass("nav-fixed");
        }
    })

    $("#btn-1").on("click", function(){
        $('#btn-2').removeClass('active');
        $('#btn-3').removeClass('active');
        $('#btn-1').addClass('active');

        $('#ctn-2').removeClass('content-active');
        $('#ctn-3').removeClass('content-active');
        $('#ctn-1').addClass('content-active');
    })

    $("#btn-2").on("click", function(){
        $('#btn-1').removeClass('active');
        $('#btn-3').removeClass('active');
        $('#btn-2').addClass('active');

        $('#ctn-1').removeClass('content-active');
        $('#ctn-3').removeClass('content-active');
        $('#ctn-2').addClass('content-active');
    })

    $("#btn-3").on("click", function(){
        $('#btn-1').removeClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').addClass('active');

        $('#ctn-1').removeClass('content-active');
        $('#ctn-2').removeClass('content-active');
        $('#ctn-3').addClass('content-active');
    })

    $("#menu-btn").on("click", function(){
        $('#menu-items').toggle(400, function(){
        });
    })

    $("#mcse").on("click", function(){
        $('#mcseexams').toggle(1000)
    })

    $("#mcsa").on("click", function(){
        $('#mcsaexams').toggle(1000)
    })





});