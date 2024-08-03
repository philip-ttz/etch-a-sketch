const colormode=document.querySelector("#colormode");
const rainbowmode=document.querySelector("#rainbowmode");
const erasemode=document.querySelector("#erasemode");


colormode.addEventListener('click', () =>{
    activemode(0);
})
rainbowmode.addEventListener('click', () =>{
    activemode(1);
})
erasemode.addEventListener('click', () =>{
    activemode(2);
})


function activemode(mode){
    if(mode===0){
        colormode.classList.add("activebtn");
        rainbowmode.classList.remove("activebtn");
        erasemode.classList.remove("activebtn");
    }else if(mode ===1){
        rainbowmode.classList.add("activebtn");
        erasemode.classList.remove("activebtn");
        colormode.classList.remove("activebtn");
    }else if(mode ===2){
        erasemode.classList.add("activebtn");
        rainbowmode.classList.remove("activebtn");
        colormode.classList.remove("activebtn");
    }
}