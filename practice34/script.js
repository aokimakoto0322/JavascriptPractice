const container = document.querySelector(".container")

const mybox = document.getElementById("mybox")

setTimeout(() => {
    container.append(mybox)
}, 3000)