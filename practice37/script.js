//input要素の取得
const element = document.getElementById("myText")

element.addEventListener("input", handleChanged)

function handleChanged(event){
    const value = event.target.value

    document.querySelector(".log").innerHTML = value
}