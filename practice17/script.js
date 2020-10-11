

window.addEventListener("scroll", change);


function change(){

    const x = window.scrollX;
    const y = window.scrollY;
    console.log(x, y);

    document.getElementById("xscoll").innerHTML = x;
    document.getElementById("yscroll").innerHTML = y;
}

var button = document.getElementById("bottom");
button.addEventListener("click", scrollbottom);

function scrollbottom(){
    window.scrollTo(0, window.outerHeight);
}