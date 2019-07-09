$(document).ready(function(){

    $(".submit").on("click",function(ev){
        ev.preventDefault();
        if($("#red").is(":checked") == true){
            $("#text1").hide();
            
            $("#text2").css("background-color","red");
            $("#text3").css("background-color","red");
            $("#text4").css("background-color","red");
            $("#text1").fadeIn(2000).css("background-color","red");
        }
        else if($("#blue").is(":checked") == true){
            $("#text1").hide();
            $("#text2").hide();
            $("#text3").css("background-color","blue");
            $("#text4").css("background-color","blue");
        }

        else if($("#green").is(":checked") == true){
            $("#green").slideToggle(2000);
            $("#text1").css("background-color","green");
            $("#text2").css("background-color","green");
            $("#text3").css("background-color","green");
            $("#text4").css("background-color","green");
        }
        else{
            alert("Please choose a Color");
        }
            
    })



})