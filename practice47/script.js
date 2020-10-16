const checkbox = document.getElementById("check")
const checkbox2 = document.getElementById("check2")
const img = document.getElementById("image")

checkbox.addEventListener("click", () => {
    if(checkbox.checked == true){
        img.animate(
            {
                filter: [
                    "grayscale(0%)",//初期値
                    "grayscale(100%)"//終了値
                ]
            },
            {
                duration: 500,//時間
                fill: "forwards",//終了時に状態を保つ
                easing: "ease"//加速度の種類
            }
        )
    }else{
        img.animate(
            {
                filter:[
                    "grayscale(100%)",
                    "grayscale(0%)"
                ]
            },
            {
                duration: 500,
                fill: "forwards",
                easing: "ease"
            }
        )
    }
})


checkbox2.addEventListener("click", () => {
    if(checkbox2.checked == true){
        img.animate(
            {
                transform: [
                    "translateX(0px)",
                    `translateX(100px)`
                ]
            },
            {
                duration: 500,
                fill: "forwards",
                easing: "ease"
            }
        )
    }else{
        img.animate(
            {
                transform: [
                    "translateX(100px)",
                    "translateX(0px)"
                ]
            },
            {
                duration: 500,
                fill: "forwards",
                easing: "ease"
            }
        )
    }
})