


function changecolor(){
   let color = document.getElementById("result").value;
   let divbox1 = document.getElementById("div1");
   let divbox2 = document.getElementById("div2");
   divbox1.style.backgroundColor = color;
   divbox1.onclick = function(){
      divbox2.style.backgroundColor = color;
   };
}
