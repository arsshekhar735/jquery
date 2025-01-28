$(document).ready(function(){
    //Append
    $('#btn').click(function(){
        console.log("Radhe Radhe")
        $('#mypara').append("<br>Weapons cannot cut the soul, nor can fire burn it.Water cannot wet it, nor can the wind dry it.")
        console.log("Jai Shree ram")
    })
    $('#btn1').click(function(){
        $('#mypara').prepend("<h3>Verse 2.19</h3>");
    })
})