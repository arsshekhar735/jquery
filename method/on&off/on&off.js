$(document).ready(function(){
    $("#box").on({
        click:function(){
            $(this).css("background-color","red");
        },
        mouseenter:function(){
            $(this).css("background-color","orange");
        },
        mouseleave:function(){
            $(this).css("background-color","skyblue");
        }
    })
    $("#mybtn").click(function(){
        $("#box").off("click");
        $("#mybtn").text("You have made the off");
    })
})