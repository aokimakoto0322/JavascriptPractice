function calcBMI(){
    var a = document.getElementById("i0").value;
    var b = document.getElementById("i1").value;

    var c = a * a;
    var d = b / c;

    document.getElementById("calc").textContent = d;

    if(d < 18.5){
        document.getElementById("result").textContent = "やせすぎ";
    }else if(25 < d){
        document.getElementById("result").textContent = "肥満気味";
    }else{
        document.getElementById("result").textContent = "標準";
    }
}