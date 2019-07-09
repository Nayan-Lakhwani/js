

$(document).ready(function() {

    
        $("#user").on("keyup",()=>{
            $("ul").html("");
            
            $.get('Empdata.json', function(data) {
                    
                    var search = $("#user").val();
                   var regex = new RegExp(search,"i");
                   console.log(regex);
                  if($("#user").val()=="")
                  return; 
                jsonData = data.map(function(val){
                    if(val.location.toLowerCase().search(regex) !=-1||val.name.toLowerCase().search(regex) !=-1){
                        var markup = "<li id ="+val.name+">"+val.name+"|"+val.location+"</li>";
                        $("ul").append(markup);
                    }
                     
                    

                 })

              
                
         
           });
        })
           

            
     

        


});