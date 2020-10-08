function calcSum(){
    var max = document.getElementById("max").value;
    var total = 0;
    for(var i = 1; i <= max; i++){
        total += i;
    }
    document.getElementById("val").textContent = max;
    document.getElementById("sum").textContent = total;

}