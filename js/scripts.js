// checking that js file is properly linked
// alert('hi')
$(document).ready(function() {
    $("#design").click(function(){
        $(".clickme1").toggle();
        $("#design-show").toggle();
        $("#design-show").css("textAlign", "center");
        $("p").on({
            mouseenter: function(){
            $(this).css({"font-weight": "bold"});
            }
    })
    })
    })
    $("#development").click(function(){
        $(".clickme2").toggle();
        $("#development-show").toggle();
        $("#development-show").css("textAlign", "center");
        $("p").on({
            mouseenter: function(){
            $(this).css({"font-weight": "bold"});
            }
    })
    })
// alert('hi')