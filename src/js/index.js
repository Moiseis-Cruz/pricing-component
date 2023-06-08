const btnToggle = document.querySelector("#toggle")

const containerCards = document.querySelectorAll(".container-cards")

btnToggle.addEventListener("click", () => {
    desativarSecao()

    containerCards.forEach(e => {
        e.classList.toggle("actived")
    })
})

function desativarSecao() {
    const sectionActived = document.querySelector(".actived")

    sectionActived.classList.remove("actived")
}