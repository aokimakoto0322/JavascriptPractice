const element = document.getElementById("myFile")
const emgEl = document.querySelector(".log img")

element.addEventListener("input", event => {
    const target = event.target

    const files = target.files

    const file = files[0]

    const reader = new FileReader()
    reader.addEventListener("load", () => {
        console.log(reader.result)
        emgEl.src = reader.result
    })

    reader.readAsDataURL(file)
})