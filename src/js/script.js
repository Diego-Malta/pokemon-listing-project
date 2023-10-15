const themeSwitchButton = document.getElementById("theme-switch");
const body = document.body;
const themeSwitchButtonImage = document.querySelector("header .image-button");


themeSwitchButton.addEventListener("click", () => {
    if (!body.classList.contains("dark-mode")) {
        body.classList.add("dark-mode");
        themeSwitchButtonImage.setAttribute("src", "./src/images/moon.png");
    } else {
        body.classList.remove("dark-mode");
        themeSwitchButtonImage.setAttribute("src", "./src/images/sun.png");
    }
});