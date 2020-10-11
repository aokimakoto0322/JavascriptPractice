var w = window.innerWidth;
var h = window.innerHeight;

var wresult = `横幅は${w}pxです。`;
var hresult = `縦幅は${h}pxです、`;


document.getElementById("height").innerHTML = hresult;
document.getElementById("width").innerHTML = wresult;


//動的に値を取得する
window.addEventListener("resize", resizehander);

function resizehander(){
    const w = window.innerWidth;
    const h = window.innerHeight;

    document.getElementById("width2").innerHTML = `画面の幅は${w}pxです。`;
    document.getElementById("heigth2").innerHTML = `画面の高さは${h}pxです。`;
}