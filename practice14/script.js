//スクリプト開始時の時間を記録
const oldTime = Date.now();


//setIntervalは一定時間(1000ms)ごとに処理を繰り返すメソッド
setInterval(() => {
    const currentTime = Date.now();
    //経過した時間(ms)を取得
    //oldTimeはスクリプトの最初にしか宣言されないため変わらない
    //一定ごとに更新されるcurrentTimeの差分で経過時間を測る
    const diff = currentTime - oldTime;
    console.log(diff);

    //秒数を得る
    //math.floorは整数のみ取得する
    const sec = Math.floor(diff / 1000);

    document.getElementById("time").innerHTML = `${sec} 秒が経過`;
    
}, 1000);