function kaibun(){
    var moji = document.getElementById("source").value;
    var result = [];
    for(var i = moji.length; i >= 0; i--){
        result += moji.charAt(i);
    }
    document.getElementById("result").textContent = result;
}