const nodelist = document.querySelectorAll(".box").forEach((targetBox) => {
    targetBox.addEventListener("click", () => {
        alert(`${targetBox.innerHTML}がクリックされました`)
    })
})