const ratoPopUp = window.document.querySelector("div.rato-pop-up")

setTimeout(() => {
    ratoPopUp.classList.add("--rato-pop-up-on")
}, 1000)

ratoPopUp.addEventListener("click", () => {
    ratoPopUp.classList.remove("--rato-pop-up-on")
})