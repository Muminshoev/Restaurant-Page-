import img from "./img/main-img.png"

function homePage() {
    const contentEl = document.getElementById("content");
        const containerEl = document.createElement("div");
        containerEl.className = "container flex-container";
            const wrapperEl = document.createElement("div");
            wrapperEl.className = "wrapper";
                const mainHeader = document.createElement("h1");
                mainHeader.className = "main__header";
                mainHeader.innerText = "Tasty Food ";
                    const spanEl = document.createElement("span");
                    spanEl.innerText = "Collections";
                mainHeader.appendChild(spanEl);
                const descrEl = document.createElement("p");
                descrEl.className = "descr"
                descrEl.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue";
                const mainBtn = document.createElement("button");
                mainBtn.className = "main__btn"
                mainBtn.innerText = "Menu";
                const mainImg = document.createElement("img");
                mainImg.className = "main__img";
                mainImg.src = img;
                mainImg.alt = "main-img";
            wrapperEl.append(mainHeader, descrEl, mainBtn);
            containerEl.append(wrapperEl, mainImg);
            contentEl.appendChild(containerEl);
};

function addHomePage() {
    const homeBtn = document.getElementById("home");
    
    homeBtn.addEventListener("click", () => {
    const contentEl = document.getElementById("content");
    contentEl.innerHTML = "";
    homePage()
    })
}

homePage();
addHomePage();

