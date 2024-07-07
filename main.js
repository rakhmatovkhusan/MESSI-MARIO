var character = document.querySelector(".character");
var block = document.querySelector(".block");

function jump(){
    if(character.classList != "animamte"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
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