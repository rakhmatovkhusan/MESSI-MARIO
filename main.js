var character = document.querySelector(".character");
var block = document.querySelector(".block");
let messi = document.querySelector(".img_messi")

function jump(){
    if(character.classList != "animamte"){
        character.classList.add("animate");
        messi.setAttribute('src', "./Screenshot_2024-07-07_173111-removebg-preview.png");
    }
    setTimeout(function(){
        character.classList.remove("animate");
        messi.setAttribute('src', "./Screenshot_2024-07-07_172408-removebg-preview (1).png");
    },500);
}

let checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 
    if(blockLeft < 90 && blockLeft > 0 &&   characterTop>=349){
        block.style.animation = "none";
        block.style.display = "none";
        alert("YOU LOSE, TRY AGAIN!")
    }
},10)