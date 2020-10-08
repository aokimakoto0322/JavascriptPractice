var rectangle = document.getElementById("rectangle1");
var button = document.getElementById("button1");

button.addEventListener("click", onClickButton);


function onClickButton(){
    //Math.trunc は小数点を切り捨てする（例：3.14 -> 3）
    //Math.random は0から1の間でランダムの数字を出す。この場合は０から３６０にしたいので３６０かけた
    const randomhue = Math.trunc(Math.random() * 360);

    const randomcolorstart = `hsl(${randomhue}, 100%, 50%)`;
    const randomcolorend = `hsl(${randomhue + 40}, 100%, 50%)`;

    rectangle.style.setProperty("--start", randomcolorstart);
    rectangle.style.setProperty("--end", randomcolorend);
}