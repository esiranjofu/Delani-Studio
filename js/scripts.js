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

$(document).ready(function(){
    $("#work4").mouseover(function(){
      $(".overlay4").show();
    }).mouseout(function(){
      $(".overlay4").hide();
    });
  });

    $("#work3").mouseover(function(){
        $(".overlay3").show();
    }).mouseout(function(){
        $(".overlay3").hide();
    });

    $("#work2").mouseover(function(){
        $(".overlay2").show();
    }).mouseout(function(){
        $(".overlay2").hide();
    });

    $("#work1").mouseover(function(){
        $(".overlay1").show();
    }).mouseout(function(){
        $(".overlay1").hide();
    });

    $("#work5").mouseover(function(){
        $(".overlay5").show();
    }).mouseout(function(){
        $(".overlay5").hide();
    });

    $("#work6").mouseover(function(){
        $(".overlay6").show();
    }).mouseout(function(){
        $(".overlay6").hide();
    });

    $("#work7").mouseover(function(){
        $(".overlay7").show();
    }).mouseout(function(){
        $(".overlay7").hide();
    });
    
    $("#work8").mouseover(function(){
        $(".overlay8").show();
    }).mouseout(function(){
        $(".overlay8").hide();
    })

// $("#work4").on({
//     mouseenter: function () {
//         $(".overlay").show;
//     },
//     mouseleave: function () {
//         $("overlay").hide
//     }
// });
// $(".overlay").hover(function(){
//     $(this).animate({opacity:'1'});
//   },
//   function(){
//     $(this).animate({opacity:'0'});
//   })
// alert('hi')