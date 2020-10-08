function check(){
    var a = document.getElementById("i0").value;
    var b = document.getElementById("i1").value;

    if(a == b){
        document.getElementById("result").textContent = "同じ";
    }else{
        document.getElementById("result").textContent = "はずれ"
    }
}