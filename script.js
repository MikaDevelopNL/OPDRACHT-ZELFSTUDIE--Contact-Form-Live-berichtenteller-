const formEl = document.querySelector(".formulier");

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formName = document.querySelector("#name").value;
    
    formEl.textContent = `Hartelijk dank voor u bericht ${formName}`;
    
    formEl.classList.add("confirmation");
})


const textArea = document.querySelector("#remark");
const textCounter = document.querySelector(".counter");
textArea.addEventListener("input", function(){
    textCounter.textContent = `${textArea.value.length} / 50`;
    
    if (textArea.value.length === 50) {
        textCounter.classList.add("counter-limit");
    } else if (textArea.value.length >= 40) {
        textCounter.classList.add("counter-warning");
        textCounter.classList.remove("counter-limit");
    } else {
        textCounter.classList.remove("counter-warning");
        textCounter.classList.remove("counter-limit");
    }
});

const nameEl = document.querySelector("#name"); 
const nameCounter = document.querySelector(".name-counter")

nameEl.addEventListener("input", function(){
    nameCounter.textContent = `${nameEl.value.length} / 25`;
    
    if (nameEl.value.length === 25) {
        nameCounter.classList.add("counter-limit-name");
    } else if (nameEl.value.length >= 20) {
        nameCounter.classList.add("counter-warning");
        nameCounter.classList.remove("counter-limit-name");
    } else {
        nameCounter.classList.remove("counter-warning");
        nameCounter.classList.remove("counter-limit-name");
    }
})