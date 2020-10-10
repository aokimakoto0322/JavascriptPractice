var button = document.getElementById("start");
button.addEventListener("click", startClick);

//１０秒にカウントセット
const totaltime = 10000;
const oldtime = Date.now();

function startClick(){
    countStart();
}

function countStart(){
    var cnt = setInterval(() => {
        const currenttime = Date.now();
        const diff = currenttime - oldtime;
        //セットしたカウントから差分を引いて残りの秒数を求める
        //remainMsecは10-1, 10-2, 10-3...をインターバルごとに繰り返し行い、カウントダウンする
        const remainMsec = totaltime - diff;

        const remainsec = Math.ceil(remainMsec / 1000);

        let label = `残り${remainsec}秒`;

        


        //残り０秒になったらsetIntervalを止める
        if(remainsec <= 0){
            clearInterval(cnt);
            label = "終了";
        }

        document.getElementById("last").innerHTML = label;
        
    }, 1000)
}

var button2 = document.getElementById("start2");
button2.addEventListener("click", startClick2);

var oldtime2;

function startClick2(){
    //ボタンを押した時に時刻を取得
    oldtime2 = Date.now();
    countStart2();
}

function countStart2(){
    var cnt = setInterval(() => {
        const currenttime = Date.now();
        const diff = currenttime - oldtime2;
        //セットしたカウントから差分を引いて残りの秒数を求める
        //remainMsecは10-1, 10-2, 10-3...をインターバルごとに繰り返し行い、カウントダウンする
        const remainMsec = totaltime - diff;

        const remainsec = Math.ceil(remainMsec / 1000);

        let label = `残り${remainsec}秒`;

    

        //残り０秒になったらsetIntervalを止める
        if(remainsec <= 0){
            clearInterval(cnt);
            label = "終了";
        }

        document.getElementById("last2").innerHTML = label;
        
    }, 1000)
}