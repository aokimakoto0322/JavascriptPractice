const container = document.querySelector(".container")

const newbox = `<div class="new-box box">.new-box要素</div>`

setTimeout(() => {
    //container要素の先頭に新しいBOXを追加する
    container.insertAdjacentHTML("afterbegin", newbox)

    //container要素の直後にBOXを追加する
    container.insertAdjacentHTML("afterend", newbox)
}, 3000)