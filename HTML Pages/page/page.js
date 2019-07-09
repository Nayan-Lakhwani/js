function button1() {

    let h = document.createElement("div");
    h.id = "column-1";

    let v = document.getElementById("box1");
    v.appendChild(h);

}

function button2() {

    let h = document.createElement("div");
    let i = document.createElement("div");
    h.id = "column-1";
    i.id = "column-1";
    let v = document.getElementById("box1");
    document.createTextNode("Things will be added here");
    v.appendChild(h);
    v.appendChild(i);

}

function button3() {

    let h = document.createElement("div");
    let i = document.createElement("div");
    let j = document.createElement("div");
    h.id = "column-1";
    i.id = "column-1";
    j.id = "column-1";
    let v = document.getElementById("box1");
    v.appendChild(h);
    v.appendChild(i);
    v.appendChild(j);
}

function button4() {

    let h = document.createElement("div");
    let i = document.createElement("div");
    let j = document.createElement("div");
    let k = document.createElement("div");
    h.id = "column-1";
    i.id = "column-1";
    j.id = "column-1";
    k.id = "column-1";
    let v = document.getElementById("box1");
    v.appendChild(h);
    v.appendChild(i);
    v.appendChild(j);
    v.appendChild(k);
}

function button5() {
    let h = document.createElement("div");
    let i = document.createElement("div");
    h.id = "column-2";
    i.id = "column-3";
    let v = document.getElementById("box1");
    v.appendChild(h);
    v.appendChild(i);
}

function button6() {
    let h = document.createElement("div");
    let i = document.createElement("div");
    h.id = "column-3";
    i.id = "column-2";
    let v = document.getElementById("box1");
    v.appendChild(h);
    v.appendChild(i);
}

function button7() {
    let h = document.createElement("div");
    let i = document.createElement("div");
    let j = document.createElement("div");
    h.id = "column-2";
    i.id = "column-4";
    j.id = "column-2";
    let v = document.getElementById("box1");
    v.appendChild(h);
    v.appendChild(i);
    v.appendChild(j);
}


function allowDrag(ev) {

    ev.preventDefault();
}



function startdrag() {

    count = window.event.target.value;


}



function dropit(ev) {
    let h = 0,
        v = 0,
        i = 0,
        j = 0,
        k = 0;

    switch (count) {
        case "1":
            h = document.createElement("div");
            h.id = "column-1";
            v = document.getElementById("box1");
            v.appendChild(h);
            break;

        case "2":
            h = document.createElement("div");
            i = document.createElement("div");
            h.id = "column-1";
            i.id = "column-1";
            v = document.getElementById("box1");
            document.createTextNode("Things will be added here");
            v.appendChild(h);
            v.appendChild(i);
            break;

        case "3":
            h = document.createElement("div");
            i = document.createElement("div");
            j = document.createElement("div");
            h.id = "column-1";
            i.id = "column-1";
            j.id = "column-1";
            v = document.getElementById("box1");
            v.appendChild(h);
            v.appendChild(i);
            v.appendChild(j);
            break;

        case "4":
            h = document.createElement("div");
            i = document.createElement("div");
            j = document.createElement("div");
            k = document.createElement("div");
            h.id = "column-1";
            i.id = "column-1";
            j.id = "column-1";
            k.id = "column-1";
            v = document.getElementById("box1");
            v.appendChild(h);
            v.appendChild(i);
            v.appendChild(j);
            v.appendChild(k);
            break;

        case "5":
            h = document.createElement("div");
            i = document.createElement("div");
            h.id = "column-2";
            i.id = "column-3";
            v = document.getElementById("box1");
            v.appendChild(h);
            v.appendChild(i);
            break;

        case "6":
            h = document.createElement("div");
            i = document.createElement("div");
            h.id = "column-3";
            i.id = "column-2";
            v = document.getElementById("box1");
            v.appendChild(h);
            v.appendChild(i);
            break;

        case "7":
            h = document.createElement("div");
            i = document.createElement("div");
            j = document.createElement("div");
            h.id = "column-2";
            i.id = "column-4";
            j.id = "column-2";
            v = document.getElementById("box1");
            v.appendChild(h);
            v.appendChild(i);
            v.appendChild(j);
            break;
        default:
            console.log("hi");


    }

}

$(document).ready(function(){
    var count = 0;
    $("button").click(function(){
       $("p.hint").remove();
       count = 1;
    });
    
       $("button").mouseleave(function(){
       $("p.hint").remove(); 
       count = 0;
    });

});
