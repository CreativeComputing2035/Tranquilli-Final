$(document).ready(function(){ 
    "use strict";   
    
    $(".NYLON2").on("mouseover", function(evt){
    $(this).css("color","deeppink");
        
    });
    
    $("#hey").on("mouseover", function(evt){
    $(this).css("color","deeppink");
        
    });
    
    $('#NYLON').mouseover(function(){
    $('#hey').show();
        
    })
    
    $('#NYLON').mouseover(function(){
    $('#NYLON2').show();
        
    })
    
    $('#hey').mouseover(function(){
    $('.NYLON2').show();
        
    })
    
    $("#NYLON").on("mouseover", function(evt){
    $(this).css("color","deeppink");
        
    });
    
    $("#NYLON").hover(myFunction2);
    $("#hey").hover(myFunction3);
    
});
//-------------------------------------------------------------------
function swapMe() {
    var tempText = $("#myList li:nth-child(3)").text();
    $("#myList li:nth-child(3)").text($("#myList li:nth-child(4)").text()); 
    $("#myList li:nth-child(4)").text(tempText);
};
function myFunction2() {
    $(this).css("position","inline");
    $(this).css({"text-shadow":"7px 7px #FFFF00","font-size":"400%",});
}
function myFunction3() {
    $(this).css("position","inline");
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"120%",});

};
function myFunction4(myObject) {
    $(myObject).slideDown()
        .delay(2000)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "slow");
}


