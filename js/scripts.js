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
    // check industry
    $(document).ready(function() {
        $("#customerinfo form").submit(function(event) {
            var operationIndustry = document.getElementsByName('industry');
            var checked=0;
            for ( var i = 0; i < operationIndustry.length; i++) {
            if(operationIndustry [i].checked) {
            checked++;
            
            }
         }
            if (checked >0) {
            console.log (checked)
        
        }else 
            { //industry of service is not selected
            alert("Please choose your service industry");
      }
    })
    })

    // check whether the overhead is checked or not
    $(document).ready(function() {
        $("#customerinfo form").submit(function(event) {
            var staffOverHead = document.getElementsByName('group')
            var check = 0
            for (var i = 0; i <staffOverHead.length; i++){
                if(staffOverHead [i].check){
                    check++
                }
        }
            if (check >0) {
                console.log(check)
            }else
            { //overhead is not selected
            alert("Please choose your overhead group");
            }
        })
    })
 
// form input gathering
$(document).ready(function() {
    // confirming if company name is captured
    $("#customerinfo form").submit(function(event) {
        var organisationInput = $("input#companytName").val();
        var CustomertelNoInput = $("input#telNo").val();
        var contactNameInput = $("input#contactPerson").val();
        

        if(organisationInput== ""){
            alert( "Kindly provide your company name" );
            }
        else if( contactNameInput == "") {
                alert( "Please provide for us the contact person's name" );}
        else if (CustomertelNoInput== ""){
            alert('Kindly avail your organisation\'s telephone no. for ease of phone conversation follow up.')}
        
        // else if (operationIndustry[0].checked==false && operationIndustry[1].checked==false && operationIndustry[2].checked==false && operationIndustry[3].checked==false && operationIndustry[4].checked==false && operationIndustry[5].checked==false) {
        //     alert('please choose your industry of operation')}
            
        // else if (staffOverHead [0].checked==false && staffOverHead [1].checked==false && staffOverHead [2].checked==false && staffOverHead [3].checked==false)
        //     alert ('Please choose your company\'s overhead group')
       
        else
            console.log(CustomertelNoInput)
            // alert(` Hi ${contactNameInput}, we have received your message. Thank you for reaching out to us. One of our sales executives will reach out to you through the provided tel number for further guidance.`)        
            // // console.log(organisationInput); 
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
        
       
        //     alert ('Kindly avail a contact telephone number for future follow up with ease!')
        // else
            // alert(CustomertelNoInput);
        
        //    if (operationIndustry) {
        //        console.log('checked')
        //    }else
        //    alert('please choose your industry of operation')
        // });
       
        //     if (staffOverHead) {
                
        //     }else
        //     alert('Please choose your company\'s overhead group')
       
        //     if( contactNameInput == "") {
        //         alert( "Please provide for us the contact person's name" );}
        //     else
        //     alert(` Hi ${contactNameInput} We have received your message. Thank you for reaching out to us. One of our sales executives will reach out to you through the provided tel number for further guidance`)
        // })
    })
})
