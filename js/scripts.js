// checking that js file is properly linked
// alert('hi')
$(document).ready(function() {
    $("#design").click(function(){
        $(".clickme1").toggle();
        $("#design-show").toggle();
        $("#design-show").css("textAlign", "center");
        $( "p" )
            .on( "mouseenter", function() {
            $( this ).css({
            "font-weight": "bolder"
        });
    })
            .on( "mouseleave", function() {
            var styles = {
            fontWeight: "normal"
};
$( this ).css( styles );
});
    })

    $("#development").click(function(){
        $(".clickme2").toggle();
        $("#development-show").toggle();
        $("#development-show").css("textAlign", "center");
        $("p")
        .on( "mouseenter", function() {
            $( this ).css({
            "font-weight": "bolder"
        });
        })
        .on( "mouseleave", function() {
            var styles = {
            fontWeight: "normal"
};
$( this ).css( styles );
});
})

$("#product").click(function(){
    $(".clickme3").toggle();
    $("#product-show").toggle();
    $("#product-show").css("textAlign", "center");
    $("p")
    .on( "mouseenter", function() {
        $( this ).css({
        "font-weight": "bolder"
    });
    })
    .on( "mouseleave", function() {
        var styles = {
        fontWeight: "normal"
};
$( this ).css( styles );
});
})
})

$(".hover").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })
// alert('hi')