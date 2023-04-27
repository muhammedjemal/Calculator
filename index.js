
var value = "";
var value1 = "";
var value2 = "";
var value3 = "";
var value4 = "";
var value5 = "";
var value6 = "";
var value7 = "";
var afterEqual = false;
$("#key1").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
});

// alert((value[-1]));
$("#key2").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
});

$("#key3").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
});

$("#key4").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
});

$("#key5").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
});

$("#key6").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
});

$("#key7").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
});

$("#key8").click(function(){
    if ($("#result").text().length<12){
    value += $(this).text(); 
    $("#result").text(value);
    }
});

$("#key9").click(function(){
    if ($("#result").text().length<12){
        value += $(this).text(); 
    $("#result").text(value);
    }
}); 

$("#keyZero").click(function(){
    if ($("#result").text().length<12){
    value += $(this).text(); 
    $("#result").text(value);
    }
})
$("#keyDot").click(function(){
    if ($("#result").text().length<12){

    if (!($("#result").text().includes("."))){
        value += $(this).text();
        $("#result").text(value);
    
    }
    }
})
$("#keyMinus").click(function(){
    if(value !== "" ) {
        value1 = value;
        value = "";    
    }else{
        value1 = $("#result").text();   
    }

    $("#result").text(value);
    $(this).addClass("pressed");
    $("#keyDivide").removeClass("pressed");
    $("#keyPlus").removeClass("pressed");
    $("#keyMultiply").removeClass("pressed");
    // value += $(this).text(); 
    // newValueToDisplay = value + value1;
})



$("#keyEqual").click(function(){
    if($("#keyDivide").hasClass("pressed")){
    $("#result").text(value1/value);
    $("#keyDivide").removeClass("pressed");
    $("#keyPlus").removeClass("pressed");
    $("#keyMultiply").removeClass("pressed");
    $("#keyMinus").removeClass("pressed");
    } 
    else if($("#keyMinus").hasClass("pressed")){
        $("#result").text(value1-value);
        $("#keyDivide").removeClass("pressed");
        $("#keyPlus").removeClass("pressed");
        $("#keyMultiply").removeClass("pressed");
        $("#keyMinus").removeClass("pressed");

        } 
    else if($("#keyPlus").hasClass("pressed")){
    
    
    $("#result").text(parseFloat(value1)+parseFloat(value));
    $("#keyDivide").removeClass("pressed");
    $("#keyPlus").removeClass("pressed");
    $("#keyMultiply").removeClass("pressed");
    $("#keyMinus").removeClass("pressed");

    } 
    else if($("#keyMultiply").hasClass("pressed")){
        $("#result").text(value1*value);
        $("#keyDivide").removeClass("pressed");
        $("#keyPlus").removeClass("pressed");
        $("#keyMultiply").removeClass("pressed");
        $("#keyMinus").removeClass("pressed");
        } 
        value1 = "";
        value = "";
    
}) 

$("#keyDivide").click(function(){ 
    if(value !== "" ) {
        value1 = value;
        value = "";    
    }else{
        value1 = $("#result").text();   
    }

    $("#result").text(value);
    $(this).addClass("pressed");
    $("#keyMinus").removeClass("pressed");
    $("#keyPlus").removeClass("pressed");
    $("#keyMultiply").removeClass("pressed");
})
$("#keyPlus").click(function(){
    if(value !== "" ) {
        value1 = value;
        value = "";    
    }else{
        value1 = $("#result").text();   
    }
    $("#result").text(value);
    $(this).addClass("pressed");
    $("#keyDivide").removeClass("pressed");
    $("#keyMinus").removeClass("pressed");
    $("#keyMultiply").removeClass("pressed");
})
$("#keyPercentage").click(function(){

    var abc = $("#result").text()/100
    $("#result").text(abc);
    value = "";
    value1 = "";
})

$("#keyMultiply").click(function(){
    if(value !== "" ) {
        value1 = value;
        value = "";    
    }else{
        value1 = $("#result").text();   
    }

    $("#result").text(value);
    $(this).addClass("pressed");
    $("#keyDivide").removeClass("pressed");
    $("#keyPlus").removeClass("pressed");
    $("#keyMinus").removeClass("pressed");
})
$("#keyClear").click(function(){
    afterEqual = false;
    value = ""; 
    value1 = "";
    $("#result").text(value);
    $("#keyDivide").removeClass("pressed");
    $("#keyPlus").removeClass("pressed");
    $("#keyMultiply").removeClass("pressed");
    $("#keyMinus").removeClass("pressed");
})

$("#btnNight").click(function(){
    if($("#feature").hasClass("night")){
        $("#feature").removeClass("night");
        $("#feature").addClass("light");
        $("#btnNight").text("night")

    } else{
        $("#feature").addClass("night");
        $("#feature").removeClass("light");
        $("#btnNight").text("light");

    }
}) 