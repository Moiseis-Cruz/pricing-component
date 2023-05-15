const btnToggle = document.getElementById("toggle")

const sectionCards = document.querySelectorAll(".container-cards")

let sectionActived = document.querySelector(".actived")

const sectionDisplayed = sectionActived.classList.contains("actived")

btnToggle.addEventListener("click", function(){
    if(sectionDisplayed.checked === true){
        // sectionDisplayed.classList.remove("actived")
        sectionActived.classList.remove("actived")
    }else{

    }
})