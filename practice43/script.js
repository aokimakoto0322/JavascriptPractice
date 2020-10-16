const element = document.getElementById("myrange")
element.addEventListener('input', () => {
    const log = `現在の値は${element.value}です。`
    document.getElementById('log').innerHTML = log
})