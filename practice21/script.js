
//画像が表示された後に処理をする場合に使う
//DOMにアクセスできるタイミングで処理を実行する

window.addEventListener("DOMContentLoaded", () => {
    //boxの数を取得する
    const boxnum = document.querySelectorAll(".box").length;

    console.log(boxnum);
});