const userlist = [
    {id: 2, name: "鈴木"},
    {id: 10, name: "田中"},
    {id: 4, name: "佐藤"},
    {id: 29, name: "高橋"},
    {id: 101, name: "小笠原"},
];

//表示の更新
function updatelist(){
    let listhtml = "";

    for(const data of userlist){
        listhtml += `<li>${data.id} : ${data.name}</li>`;
    }
    //id = user_listの中の情報を直接<li></li>を入れることによって中身をリスト化している
    document.getElementById("user_list").innerHTML = listhtml;
}

//昇順にソート
function sortByAscending(){
    userlist.sort((a, b) => {
        return a.id - b.id;
    });
    updatelist();
}

//降順にソート
function sortByDisacending(){
    userlist.sort((a, b) => {
        return b.id - a.id;
    });
    updatelist();
}

var button1 = document.getElementById("ascending");
var button2 = document.getElementById("descending");

button1.addEventListener("click", sortByAscending);
button2.addEventListener("click", sortByDisacending);