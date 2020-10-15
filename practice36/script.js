document.getElementById("create-modal-button").addEventListener("click", displayModalWindow)


function displayModalWindow(){
    //モーダルウィンドウを表示する
    const modalElement = document.createElement("div")

    //作ったmodalElement(div)にクラスを付与する
    modalElement.classList.add("modal")


    //モーダルウィンドウの内部要素を生成する
    const innerElement = document.createElement("div")
    innerElement.classList.add("inner")
    innerElement.innerHTML = `<p>モーダルウィンドウの中身です。</p>
    <div class="character"></div>
    `

    modalElement.appendChild(innerElement)

    document.body.appendChild(modalElement)

    innerElement.addEventListener("click", () => {
        closeModalWindow(modalElement)
    })
}

function closeModalWindow(modalElement){
    document.body.removeChild(modalElement)
}
