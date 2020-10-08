function check(){
    var a = document.getElementById("i0").value;
    var b = document.getElementById("i1").value;

    document.getElementById("r0").textContent = (a == b);
    document.getElementById("r1").textContent = (a != b);
    document.getElementById("r2").textContent = (a < b);
    document.getElementById("r3").textContent = (a <= b);
    document.getElementById("r4").textContent = (a >= b);
}