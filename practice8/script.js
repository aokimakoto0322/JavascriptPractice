var range2 = document.getElementById("range");
range2.addEventListener('input', convert);

function convert(){
    var f = c2f(range2.value);
    var s = "華氏：" + range2.value + "度　　摂氏：" + f + "度";
    document.getElementById("result").textContent = s;
}

function c2f(range2){
    var x1 = 9 / 5;
    var x2 = x1 * range2;
    var x3 = x2 + 32;
    return Math.floor(x3);
}

