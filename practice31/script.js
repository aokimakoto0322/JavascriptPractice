const boxelement = document.getElementById("box")

boxelement.addEventListener("click", () => {
    boxelement.innerHTML = "クリックされました。"
})

//ボタンを押さなくてもdispatcheventでクリックしたことになる
setTimeout(() => {
    boxelement.dispatchEvent(new Event("click"))
}, 1000)