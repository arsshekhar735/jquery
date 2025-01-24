$(document).ready(function(){
    let temp = $('#box').html();
    console.log(temp);
    // I want the ul list element
    let temp2 = $('#box ul').html();
    console.log(temp2)
    let temp1 = $('#box').text();
    console.log(temp1)
    let temp4 = $('#box').val();
    console.log(temp4)
    let temp5 = $('#box').attr("class");
    console.log(temp5)
})