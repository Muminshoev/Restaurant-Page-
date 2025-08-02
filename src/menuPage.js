



function menuPage() {
    const contentEl = document.getElementById("content");
    const menuBtn = document.getElementById("menu");

    menuBtn.addEventListener("click", () => {
        contentEl.innerHTML = `<h1>This is menu page</h1>`
    })
};

menuPage();