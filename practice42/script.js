const element = document.getElementById("myselect")

element.addEventListener("change", () => {
    const value = element.value
    console.log(value)
    const log = `選択されているのは${value}です。`
    document.getElementById("log").innerHTML = log
})