const targetBox = document.getElementById("box");

const log = document.querySelector(".log")

targetBox.addEventListener("touchmove", (event) => {
    const touch = event.changedTouches

    log.innerHTML = `${touch[0].pageX.toFixed(2)}<br>
    ${touch[0].pageY.toFixed(2)}
    `
})

targetBox.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches

    log.innerHTML = `${touch[0].pageX.toFixed(2)}<br>
    ${touch[0].pageY.toFixed(2)}
    `
})