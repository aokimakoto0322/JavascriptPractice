//フルスクリーン化

const fullbutton = document.getElementById("full");
fullbutton.addEventListener("click", () => {
    fullScreen(document.body);
});

function fullScreen(element){
    console.log(element);
    if(element.requestFullscreen){
        element.requestFullscreen();
    }
}

//フルスクリーン解除

const exitbutton = document.getElementById("exit");
exitbutton.addEventListener("click", () => {
    exitScreen();
});

function exitScreen(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }
}