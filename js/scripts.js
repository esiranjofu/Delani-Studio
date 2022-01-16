// checking that js file is properly linked
// alert('hi')
$(document).ready(function() {
    $("#design").click(function(){
        $(".clickme").toggle();
        $("#design-show").toggle();
        $("#design-show").css("textAlign", "center");
        $("p").on({
            mouseenter: function(){
            $(this).css({"font-weight": "bold"});
            }
    })
    })
    })
// alert('hi')