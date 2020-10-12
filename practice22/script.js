
const logarea = document.getElementById("main");

//マウスを押した時のイベント
logarea.addEventListener("mousedown", () => {
    logarea.innerHTML = "マウスボタンを押した";
});

logarea.addEventListener("mouseup", () => {
    logarea.innerHTML = "マウスボタンを離した";
});

logarea.addEventListener("mousemove", () => {
    logarea.innerHTML = "マウスを動かした";
});