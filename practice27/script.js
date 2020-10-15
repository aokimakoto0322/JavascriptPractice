const targetBox = document.getElementById("box");

const logarea = document.querySelector(".log");

targetBox.addEventListener("touchstart", () => {
    logarea.innerHTML = "タッチ開始"
})

targetBox.addEventListener("touchmove", () => {
    logarea.innerHTML = "タッチ位置移動"
})

targetBox.addEventListener("touchend", () => {
    logarea.innerHTML = "タッチ終了"
})