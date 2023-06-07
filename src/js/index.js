// const btnToggle = document.getElementById("toggle")

// const sectionCards = document.querySelectorAll(".container-cards")

// const sectionActived = document.querySelector(".actived")

// const sectionDisplayed = sectionActived.classList.contains("actived")

// btnToggle.addEventListener("click", function(){
//     if(sectionDisplayed.checked === true){
//         sectionDisplayed.classList.remove("actived")
//         sectionActived.classList.remove("actived")
//     }else{

//     }
// })

const btnToggle = document.querySelector("#toggle")

const containerCards = document.querySelectorAll(".container-cards")

btnToggle.addEventListener("click", () => {
    desativarSecao()
    containerCards.forEach(e => {
        e[i].classList.toggle("actived")
    })
})

function desativarSecao() {
    const sectionActived = document.querySelector(".actived")

    sectionActived.classList.remove("actived")
}