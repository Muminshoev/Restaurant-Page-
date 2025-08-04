import menuImg from "./img/menu.png"



function menuPage() {
    const content = document.getElementById("content");
    const containerEl = document.createElement("div");
    containerEl.className = "container";
        const menuImgEl = document.createElement("img");
        menuImgEl.className = "menu__img";
        menuImgEl.src = menuImg; 
    containerEl.appendChild(menuImgEl);
    content.appendChild(containerEl);
}

function addMenuPage() {
    const btn = document.getElementById("menu");
    const content = document.getElementById("content");

    btn.addEventListener("click", () => {
        content.innerHTML = "";
        menuPage()
    })
};

addMenuPage();