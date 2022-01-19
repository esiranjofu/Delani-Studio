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
    // confirming if company name is captured
    $("#customerinfo form").submit(function(event) {
        var organisationInput = $("input#companytName").val();
        if(organisationInput== ""){
            alert( "Kindly provide your company name" );
            }
        else
            // console.log(organisationInput); 
    // })
        // $('input[type="checkbox"]').click(function(){
        //     if($(this).prop("checked") == true){
        //         console.log("Checkbox is checked.");
        //         }
        //     else if($(this).prop("checked") == false){
        //         alert("Kindly tick one option for your overhead staff.");
        //         }
        //     });
        // });
        
        // var organisationInput = $("input#companytName").val();
       
        
            // console.log(contactNameInput);
        var CustomertelNoInput = $("input#telNo").val();
        if(CustomertelNoInput == "")
            alert ('Kindly avail a contact telephone number for future follow up with ease!')
        else
            // alert(CustomertelNoInput);
        var operationIndustry = $("#industry").is(':checked');
           if (operationIndustry) {
               console.log('checked')
           }else
           alert('please choose your industry of operation')
        });
        var staffOverHead= $("#group").is(':checked');
            if (staffOverHead) {
                
            }else
            alert('Please choose your company\'s overhead group')
        var contactNameInput = $("input#contactPerson").val();
            if( contactNameInput == "") {
                alert( "Please provide for us the contact person's name" );}
            else
            alert(` Hi ${contactNameInput} We have received your message. Thank you for reaching out to us. One of our sales executives will reach out to you through the provided tel number for further guidance`)
        })
        