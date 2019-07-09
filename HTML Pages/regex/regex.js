$(document).ready(function(){

    $(".test").click(function(){

        var regex = $("input:text").val();
        
        var isValid = true;
        try {
            new RegExp(regex);
            } catch(e) {
        isValid = false;
                }

if(!isValid) alert("Invalid regular expression");

        var patt = new RegExp(regex,'g');
        
        var string = $("textarea").val();
        
        if(patt.test(string))
        {
            alert("String Matched");

        }
        else{
            alert("Not Matched");
        }
        
            let array = [...string.matchAll(patt)];
            for(let i = 0;i<array.length;i++)
            {
                var string = [array[i].index];
                
                
                alert("Matches found at index "+string);
            }
            
            

       
        // match = patt.exec(string);
        
        // while (match !== null) {
        //     console.log(`Found ${match[0]}. Next starts at ${patt.lastIndex}.`)
        //     match = patt.exec(string);
        // }
     })

  



})