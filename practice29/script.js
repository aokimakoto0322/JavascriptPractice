const width = document.getElementById("width")
const height = document.getElementById("height")

window.addEventListener("resize", () => {
    width.innerHTML = `${window.innerWidth}px`
    height.innerHTML = `${window.innerHeight}px`
})