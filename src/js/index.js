const btnToggle = document.getElementById("toggle")

const containerCards = document.querySelectorAll(".container-cards")

const containerActived = document.querySelector(".actived.container-cards")

btnToggle.addEventListener("click", () => {
    
    if(btnToggle.checked === true){
        containerActived.classList.remove("actived")
        
        containerCards[1].classList.add("actived")
    }else{
        containerActived.classList.add("actived")
        
        containerCards[1].classList.remove("actived")
    }
})