const ratoModalUp = window.document.querySelector("div.rato-Modal-up")

setTimeout(() => {
    ratoModalUp.classList.add("--rato-Modal-up-on")
}, 1000)

ratoModalUp.addEventListener("click", () => {
    ratoModalUp.classList.remove("--rato-Modal-up-on")
})