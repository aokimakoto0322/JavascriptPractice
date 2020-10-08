function calc(){
    var y = document.getElementById("year").value;
    
    var x = y % 12;

    switch(x){
        case 0:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "申"
            break;
        case 1:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "酉"
            break;
        case 2:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "戌"
            break;
        case 3:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "亥"
            break;
        case 4:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "子"
            break;
        case 5:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "丑"
            break;
        case 6:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "寅"
            break;
        case 7:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "卯"
            break;
        case 8:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "辰"
            break;
        case 9:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "巳"
            break;
        case 10:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "午"
            break;
        case 11:
            document.getElementById("y").textContent = y;
            document.getElementById("e").textContent = "未"
            break;
    }
}