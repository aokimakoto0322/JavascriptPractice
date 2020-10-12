//吹き出しの要素定義
var balloon = document.getElementById("baloon");

//対象の文字列
var moji = document.querySelector(".paragraph");

//選択開始したときのイベント
moji.addEventListener("selectstart", () => {
    //選択開始して、マウスを離したときの動作
    moji.addEventListener("mouseup", (event) => {
        //選択されている文字の取得
        const selectioncharacter = window.getSelection().toString();

        if(selectioncharacter.length > 0){
            balloon.innerHTML = selectioncharacter;
            //選択した要素のclassを追加
            balloon.classList.add("on");

            //balloonの位置調整
            balloon.style.left = `${event.clientX - balloon.clientWidth / 2}px`;
            balloon.style.top = `${event.clientY - balloon.clientHeight * 2}px`;
            console.log(balloon.clientWidth, balloon.clientHeight);
        }else{
            removePopup();
        }
    });
});

balloon.addEventListener("click", () =>{
    removePopup();
});

//balloonのクラスを削除する
//cssでclassがonのときopacityが１removeするとopacityが０になり消える仕組み
function removePopup(){
    balloon.classList.remove("on");
}