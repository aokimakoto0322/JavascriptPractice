const rectangle = document.querySelector(".rectangle")

//メディアクエリ情報
const mediaQueryList = matchMedia('(min-width: 600px)')

//メディアクエリが変更されたタイミングで処理
mediaQueryList.addListener(onMediaQueryChange)

function onMediaQueryChange(m){
    if(m.matches == true){
        rectangle.classList.add("big-size")
        console.log("600pxを超えました")
    }else{
        rectangle.classList.remove("big-size")
        console.log("600pxを下回りました")
    }
}


//最初にページ表示時にonMediaQueryChangeを実行しておく
onMediaQueryChange(mediaQueryList)