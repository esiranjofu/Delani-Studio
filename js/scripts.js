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
// form input gathering
$(document).ready(function() {
    $("#getDetails").submit(function(event) {

        // $('input[type="checkbox"]').click(function(){
        //     if($(this).prop("checked") == true){
        //         console.log("Checkbox is checked.");
        //         }
        //     else if($(this).prop("checked") == false){
        //         alert("Kindly tick one option for your overhead staff.");
        //         }
        //     });
        // });
        
        var organisation = $("input#companytName").val();
        var contactName = $("input#contactPerson").val();
        var numberOfStaff = $("input#staffOverhead").val();
        var serviceIndustry = $("input#exclamation").val();

        let checkboxes = document.querySelectorAll('input[name="group1"]:checked');
        if (checkboxes = false) {
            alert ("please tick choose the category of your staff overhead staff!")
        }else if (organisation == ""){
            alert("Please input your organisation name");
        }else if (contactName == ""){
            alert ("Could we please have the name of the contact person?")
        }else if           

        // var verbInput = $("input#verb").val();
        // var nounInput = $("input#noun").val();
        // var flavor = $("input#noun").val();

//         $(".person1").text(person1Input);
//         $(".person2").text(person2Input);
//         $(".animal").text(animalInput);
//         $(".exclamation").text(exclamationInput);
//         $(".verb").text(verbInput);
//         $(".noun").text(nounInput);

//         $("#story").show();

//         event.preventDefault();
//     });
// });
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
