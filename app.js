const dropBtn = document.querySelectorAll("[data-drop-btn]");
const dropDown = document.querySelectorAll(".drop-down");
const arrow = document.querySelectorAll("[data-arrow]");
const text = document.querySelectorAll("[data-text]");

for(let i = 0; i < dropBtn.length; i++) {
    dropBtn[i].addEventListener("click", () => {
        dropDown[i].classList.toggle("active");
        text[i].classList.toggle("active-color")
        
        if(arrow[i].style.transform != "rotate(-180deg)") {
            arrow[i].style.transform = "rotate(-180deg)";
        } else {
            arrow[i].style.transform = "rotate(0deg)";
        }
    })
}