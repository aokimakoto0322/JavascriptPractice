
var c = navigator.onLine;
if(c == true){
    document.getElementById("check").innerHTML = "現在オンラインです。";
}else{
    document.getElementById("check").innerHTML = "現在オフラインです。";
}

window.addEventListener("online", () =>{
    document.getElementById("check").innerHTML = "オンラインです。";
});

window.addEventListener("offline", () =>{
    document.getElementById("check").innerHTML = "オフラインです。";
});