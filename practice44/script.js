const element = document.getElementById('mycolor')

element.addEventListener('change', event => {
    const value = event.target.value

    const log = `選択された色が${value}になりました`
    const plog = document.getElementById('log')
    plog.innerHTML = log
    plog.style.backgroundColor = value

})