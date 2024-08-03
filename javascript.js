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

for (let i = 0; i < 8; i++) {
    const div=document.createElement("div");
    div.classList.add("maincolorblock");
    main.appendChild(div);

    let isMouseDown = false;

    for (let j = 0; j < 8; j++) {
        const feld = document.createElement("div");
        feld.style.cssText = "background-color:white; width:50px; height:50px; border-color:black; border-width:5px;";
        div.appendChild(feld);
        feld.addEventListener('click', () =>{
            feld.style.backgroundColor="blue";
        })

        feld.addEventListener('mousedown', () =>{
            isMouseDown = true;
        })
        feld.addEventListener('mouseup', () =>{
            isMouseDown = false;
        })
        feld.addEventListener('mouseenter', ()=>{
            if (isMouseDown){
                feld.style.backgroundColor='blue';
            }
        })
    }    
}