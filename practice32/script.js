let enableMouseWheel = true

document.getElementById("mousewheel").addEventListener("click", event => {
    if(event.target.checked == true){
        enableMouseWheel = false
    }else{
        enableMouseWheel = true
    }
})

//スクロール可能な要素上でマウスホイールしたときの動作
document.querySelector(".scrollable-element").addEventListener("wheel", (event) => {
    if(enableMouseWheel == true){
        
    }else{
        event.preventDefault()
    }
    
})