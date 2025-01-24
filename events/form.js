$(document).ready(()=>{
    console.log("Radhe Radhe");
    $("#exampleInputEmail1,#exampleInputPassword1").focus(function(){
        $(this).css("background","lightblue");
    })
    $("#exampleInputEmail1,#exampleInputPassword1").blur(function(){
        $(this).css("background","");
    })
    $("#exampleFormControlSelect1").change(function(){
        $(this).css("background","pink");
        $("#myp").html($(this).val());
    })
    $("#exampleInputEmail1,#exampleInputPassword1").select(function(){
        $(this).css("background","yellow");
    })
    $("#sumbtn").sumbit(function(){
        alert("You have Successfully sumbitted the form\nRadhe Radhe");
    })
})