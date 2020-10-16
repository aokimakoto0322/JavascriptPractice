const checkbox = document.getElementById("check")
const img = document.getElementById("image")

checkbox.addEventListener("click", event => {
    if(checkbox.checked == true){
        img.classList.add("state-show")
        console.log("checked")
    }else{
        img.classList.remove("state-show")
        console.log("not checked")
    }
})