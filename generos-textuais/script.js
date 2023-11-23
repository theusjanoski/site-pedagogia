const ratoAvisoUp = window.document.querySelector("div.rato-Aviso-up")

setTimeout(() => {
    ratoAvisoUp.classList.add("--rato-Aviso-up-on")
}, 1000)

ratoAvisoUp.addEventListener("click", () => {
    ratoAvisoUp.classList.remove("--rato-Aviso-up-on")
})