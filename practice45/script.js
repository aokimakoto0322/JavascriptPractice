
const PREF_LIST = [
    {value: 1, name: "北海道"},
    {value: 2, name: "青森"},
    {value: 3, name: "岩手"},
    {value: 4, name: "宮城"},
    {value: 5, name: "秋田"},
    {value: 6, name: "山形"},
    {value: 7, name: "福島"},
    {value: 8, name: "茨城"},
    {value: 9, name: "栃木"},
    {value: 10, name: "群馬"},
    {value: 11, name: "埼玉"},
    {value: 12, name: "千葉"},
    {value: 13, name: "東京"},
    {value: 14, name: "神奈川"},
    {value: 15, name: "新潟"},
    {value: 16, name: "富山"},
    {value: 17, name: "石川"},
    {value: 18, name: "福井"},
    {value: 19, name: "山梨"},
    {value: 20, name: "長野"},
    {value: 21, name: "岐阜"},
    {value: 22, name: "静岡"},
    {value: 23, name: "愛知"},
    {value: 24, name: "三重"},
    {value: 25, name: "滋賀"},
    {value: 26, name: "京都"},
    {value: 27, name: "大阪"},
    {value: 28, name: "兵庫"},
    {value: 29, name: "奈良"},
    {value: 30, name: "和歌山"},
    {value: 31, name: "鳥取"},
    {value: 32, name: "島根"},
    {value: 33, name: "岡山"},
    {value: 34, name: "広島"},
    {value: 35, name: "徳島"},
]

const selectElement = document.getElementById("pref")

//初期値を設定
let optionString = `<option value="">選択してください</option>`

PREF_LIST.forEach(item => {
    optionString += `<option value="${item.value}">${item.name}</option>`
})

selectElement.innerHTML = optionString

selectElement.addEventListener("change", event => {
    //選択された値を取得
    const value = event.target.value

    //メッセージを作成
    const message = value == "" ? "選択されていません" : `選択されたのは${value}`

    document.querySelector(".log").innerHTML = message
})