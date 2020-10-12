document.getElementById("body").addEventListener("mousemove", (event) => {
    console.log(event.screenX, event.screenY);
});

//動かす対象
var character = document.getElementById("img");
//キャンバス
var body = document.getElementById("body");

//キャンバスを押した時のイベント
body.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", onMouseMove);

    //ボタンを押した時は上のメソッド、もしボタンを離したら以下のメソッド
    //よってドラック＆ドロップと同じ動作になる
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
    });
});

function onMouseMove(event){
    character.style.left = `${event.clientX - 50}px`;
    character.style.top = `${event.clientY - 50}px`;
}