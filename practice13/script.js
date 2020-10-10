
const userlist = [
    {name: "鈴木", age: 18},
    {name: "田中", age: 27},
    {name: "佐藤", age: 32},
    {name: "高橋", age: 41},
    {name: "小笠原", age: 56},
    {name: "小川", age: 23},
    {name: "加藤", age: 30},
];

//class=buttonと指定されている要素を全て取得
const button = document.querySelectorAll(".button");
button.forEach(element => {
    element.addEventListener("click", (event) => {
        onClickButton(event);
    });
});


function onClickButton(event){
    //クリックされたボタンを判別する
    const btn = event.target;
    console.log(btn);
    //ボタン要素からdata-ageを取得
    const targetage = btn.dataset.age;
    console.log(targetage);
    //targetage以上のユーザー配列を生成する
    const filtedList = userlist.filter((data) => data.age >= targetage);

    updatelist(filtedList);
}

function updatelist(filtedList){
    let listHtml = "";

    for(const data of filtedList){
        listHtml += `<li>${data.name} : ${data.age}</li>`;
    }
    document.getElementById("user_list").innerHTML = listHtml;
}