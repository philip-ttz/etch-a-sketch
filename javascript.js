const colormode=document.querySelector("#colormode");
const rainbowmode=document.querySelector("#rainbowmode");
const erasemode=document.querySelector("#erasemode");
const main=document.querySelector(".main");

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

let isMouseDown = false;
let div = [];
let feld = [];

for (let i = 0; i < 8; i++) {
    div[i]=document.createElement("div");
    div[i].classList.add("maincolorblock");
    main.appendChild(div[i]);
    for (let j = 0; j < 8; j++) {
        let aktFE = i*8+j;
        feld[aktFE] = document.createElement("div");
        feld[aktFE].style.cssText = "background-color:white; width:50px; height:50px; border-color:black; border-width:5px;";
        div[i].appendChild(feld[aktFE]);
    }    
}



document.addEventListener('mousedown', () =>{
    isMouseDown = true;
})
document.addEventListener('mouseup', () =>{
    isMouseDown = false;
})

feld.forEach(div =>{
    div.addEventListener('click', () =>{
        div.style.backgroundColor="blue";
    })
    div.addEventListener('mouseenter', ()=>{
        if (isMouseDown){
            div.style.backgroundColor='blue';
        }
    })
})