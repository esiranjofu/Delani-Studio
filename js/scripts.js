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
      $(".overlay4").show({opacity: '1'});
    }).mouseout(function(){
      $(".overlay4").hide({opacity: '0'});
    });
  });

    $("#work3").mouseover(function(){
        $(".overlay3").show({opacity: '1'});
    }).mouseout(function(){
        $(".overlay3").hide({opacity: '0'});
    });

    $("#work2").mouseover(function(){
        $(".overlay2").show({opacity: '1'});
    }).mouseout(function(){
        $(".overlay2").hide({opacity: '0'});
    });

    $("#work1").mouseover(function(){
        $(".overlay1").show({opacity: '1'});
    }).mouseout(function(){
        $(".overlay1").hide({opacity: '0'});
    });

    $("#work5").mouseover(function(){
        $(".overlay5").show({opacity: '1'});
    }).mouseout(function(){
        $(".overlay5").hide({opacity: '0'});
    });

    $("#work6").mouseover(function(){
        $(".overlay6").show({opacity: '1'});
    }).mouseout(function(){
        $(".overlay6").hide({opacity: '0'});
    });

    $("#work7").mouseover(function(){
        $(".overlay7").show({opacity: '1'});
    }).mouseout(function(){
        $(".overlay7").hide({opacity: '0'});
    });

    $("#work8").mouseover(function(){
        $(".overlay8").show({opacity: '1'});
    }).mouseout(function(){
        $(".overlay8").hide({opacity: '0'});
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
            var staffOverhead = document.querySelector('input[name = "group"]:checked');
            if(staffOverhead != null){  //Test if something was checked
            console.log(staffOverhead.value); //Alert the value of the checked.
        } else {
        alert('Please choose your staff overhead group'); //Alert, nothing was checked.
        }
        })
        
    //         var staffOverHead = document.getElementsByName('group')
    //         var check = 0
    //         for (var n = 0; n <staffOverHead.length; n++){
    //             if(staffOverHead [n].check){
    //                 check++;
    //             }
    //     }
    //         if (check =0) {
    //             console.log(check)
    //         }else
    //         { //overhead is not selected
    //         alert("Please choose your overhead group");
    //         }
    //     })
    // })
 
// form input gathering
$(document).ready(function() {
    // confirming if company name is captured
    $("#customerinfo form").submit(function(event) {
        var organisationInput = $("input#companyName").val();
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
           alert(`Hi ${contactNameInput} thank you for your message. One of our executive representatives will get in touch with you through the provided telephone number, ie ${CustomertelNoInput} for further guidance.`)})
        })
    })
