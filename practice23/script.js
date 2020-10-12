var mainarea = document.getElementById("main");
var logarea = document.getElementById("log2");

mainarea.addEventListener("mouseenter", () => {
    mainarea.innerHTML = "mainareaにマウスが乗っかった";
});

mainarea.addEventListener("mouseleave", () => {
    mainarea.innerHTML = "mainareaからマウスが離れた";
});


logarea.addEventListener("mouseenter", () => {
    logarea.innerHTML = "innerにマウスが乗っかった";
});

logarea.addEventListener("mouseleave", () => {
    logarea.innerHTML = "innnerからマウスが離れた";
});