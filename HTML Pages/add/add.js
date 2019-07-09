var count = 0 ;
var total = 0;

$(document).ready(function(){
    $("#records2").text(total);

$("#addbutton").click(function(){
  
var regex = new RegExp("^[A-Za-z]*$");
var name = $("#result1").val();
var subject = $("#result2").val();
var marks = $("#result3").val();


if(regex.test(name)==false || regex.test(subject)==false)
{
  alert("Name and Subject can not contain Numbers. Please Enter Details again");
  $("#result1").val(""); 
  $("#result2").val("");  
  $("#result3").val("");
  name = "";
  subject = "";
  marks = "";
}


id = name.concat(subject).concat(marks);

    var markup;
    
    if($('#'+ id).length){
        
        alert("stats already present");
        
    }
    else{
      
        markup = "<tr class =" + subject + " id = innerRow>" +
        "<td>"+name+"</td>"+
        "<td>"+subject+"</td>"+
        "<td>"+marks+"</td>"+
        "<td><button type = 'button' class= 'appendbutton' id ="+id+" >Remove</button></td>"+
        "</tr>";
      $("#table1").append(markup);
        total++;
        $("#records2").text(total);
        
        if($('#'+ subject).length==0){
         
        var markup1 = "<a input type = button class= dropdown-item id ="+subject+">"+subject+"</a>";
                  
        $(".dropdown-menu").append(markup1);
        
        
        }
      
        
        
	}

})

$(EventTarget).click(function(){
    if(event.target.className == 'appendbutton')
    {
        
        $('#'+event.target.id).parent().parent().remove();
        total--;
        $("#records2").text(total);

          
        var c = $(event.target).parent().parent().attr('class');
        var no = 0;
      $("tr").each(function(){
        
          if($(this).attr("class")==c)
          no++;
      })

      if(no==0)
      $('.dropdown-item').each(function(){
          if($(this).text()== c)
          $(this).remove();
      })
       
            

           
}})

$("#1").click(function(){
   
        var rows = $('#table1 tbody tr').get();
      
        rows.sort(function(a, b) {
      
        var A = $(a).children('td').eq(0).text().toLowerCase();
        var B = $(b).children('td').eq(0).text().toLowerCase();
      
        if(A < B) {
          return -1;
        }
      
        if(A > B) {
          return 1;
        }
      
        return 0;
      
        });
      
        $.each(rows, function(index, row) {
          $('#table1').children('tbody').append(row);
        });
      
})

$("#2").click(function(){
   
    var rows = $('#table1 tbody tr').get();
  
    rows.sort(function(a, b) {
  
    var A = $(a).children('td').eq(2).text();
    var B = $(b).children('td').eq(2).text();
   
A = parseInt(A);
B = parseInt(B);

  
    if(A < B) {
      return -1;
    }
  
    if(A > B) {
      return 1;
    }
  
    return 0;
  
    });
  
    $.each(rows, function(index, row) {
      $('#table1').children('tbody').append(row);
    });
  
})

$(document).on('click', '.dropdown-item', function() {

  var c = $(this).attr('id');
  $('tr#innerRow').show();
  

    $("tr#innerRow").each(function(){   //why #innerRow not working

       
        if($(this).attr('class') != c)
        {
          $(this).hide();
        }
        
          
 });


})

})    









