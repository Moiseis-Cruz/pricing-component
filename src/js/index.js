const btnToggle = document.getElementById("toggle")


btnToggle.addEventListener("click", () => {
    const plans = document.querySelectorAll(".container-cards")

    plans.forEach((listPlans) => {
        const sectionActived = document.querySelector(".actived")

        sectionActived.classList.remove("actived")
        
        listPlans.classList.add("actived")
    })
})


/*
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
*/