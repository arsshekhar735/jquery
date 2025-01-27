$(document).ready(function(){
    console.log("Radhe Radhe");
    $('#mybtn').click(function(){
        $('#box').css("background-color","#87cefa"); 
        $('#mypara').text("Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself on earth.");
        $('#mybtn').text("You have clicked");
    })
    $('#dark').click(function(){
        $('#box #mypara').css({
            
            "color":"#ffffff"
        })
        $('#box').css({
            "background-color":"black",
           
        })
    })
})