//参照したファイル
const element = document.getElementById("myFile")

const log = document.getElementById("log")

//ファイルが選択されたときの動作
element.addEventListener("input", event => {
    const target = event.target

    const files = target.files

    const file = files[0]

    //ファイルを読み込むためのインスタンス作成
    const reader = new FileReader();
    //ファイルをテキスト化させる
    reader.readAsText(file)
    //ファイルを読み込み終わったらlogに結果を表示させる
    //あくまでこのイベントリスナーはロードが終わったら発火する
    reader.addEventListener("load", () => {
        log.innerHTML = reader.result
        
    })
    
})