var stringnum = document.getElementById("textarea");
var result = document.getElementById("stringnum");

stringnum.addEventListener("keyup", count);

function count(){
    result.innerHTML = stringnum.value.length;
}