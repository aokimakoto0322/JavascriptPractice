const img = document.getElementById("image01");

//角度
let degree = 0;

//ループの開始
loop();

function loop(){
    const rotation = (degree * Math.PI) / 180;
    //window.innerWidthはウィンドウの幅を取得する
    const targetX = window.innerWidth / 2 + 200 * Math.cos(rotation) - 50;
    const targetY = window.innerHeight / 2 + 200 * Math.sin(rotation) - 50;

    img.style.left = `${targetX}px`;
    img.style.top = `${targetY}px`;

    degree += 1;

    requestAnimationFrame(loop);
}