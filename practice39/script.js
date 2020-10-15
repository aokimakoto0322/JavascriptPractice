
const cb = document.getElementById("cbA")
cb.addEventListener("change", event => {
    const value = event.target.checked

    const log = `チェックボックスは${value}になりました`

    document.getElementById("log").innerHTML = log
})