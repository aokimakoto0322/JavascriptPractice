

window.addEventListener("focus", () => {
    document.getElementById("fo").innerHTML = "フォーカスが当たっている";
});

window.addEventListener("blur", () => {
    document.getElementById("fo").innerHTML = "フォーカスが外れている";
});