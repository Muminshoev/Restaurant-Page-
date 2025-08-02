function homePage() {
    const contentEl = document.getElementById("content");

    contentEl.innerHTML = `<h1>This is home page</h1>`;

    const homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", () => {
        contentEl.innerHTML = "";
        contentEl.innerHTML = `<h1>This is home page</h1>`;
    })
}

homePage();