const colormode=document.querySelector("#colormode");
const rainbowmode=document.querySelector("#rainbowmode");
const erasemode=document.querySelector("#erasemode");
const main=document.querySelector(".main");
const clearmode=document.querySelector("#clearmode");
const gridsize=document.querySelector("#sizeofgrid");
const output=document.querySelector(".gridsizeoutput");
const aktcolor=document.querySelector("#color");

let isMouseDown = false;
let div = [];
let feld = [];

function createGrid(size){
    main.innerHTML="";
    
    for (let i = 0; i < size; i++) {
        div[i]=document.createElement("div");
        div[i].classList.add("maincolorblock");
        main.appendChild(div[i]);
        for (let j = 0; j < size; j++) {
            let aktFE = i*size+j;
            let dimensions = (400/size);
            feld[aktFE] = document.createElement("div");
            feld[aktFE].style.cssText = "background-color:white; border-color:black; border-width:5px;";
            feld[aktFE].style.width=""+dimensions+"px";
            feld[aktFE].style.height=""+dimensions+"px";
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
            changeColor(div);
            //div.style.backgroundColor=`${color}`;
        })
        div.addEventListener('mouseenter', ()=>{
            if (isMouseDown){
                changeColor(div);
                //div.style.backgroundColor=`${color}`;
            }
        })
    })
}

let mode = 0;

colormode.addEventListener('click', () =>{
    activemode(0);
    mode = 0;
})
rainbowmode.addEventListener('click', () =>{
    activemode(1);
    mode = 1;
})
erasemode.addEventListener('click', () =>{
    activemode(2);
    mode = 2;
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
let color=aktcolor.value;
function changeColor(feld){
    if(mode===0){
        color=aktcolor.value;
    }else if(mode ===1){
        color=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    }else if(mode ===2){
        color="white";
    }else{
        color='blue';
    }
    feld.style.backgroundColor=`${color}`;
}

clearmode.addEventListener('click', () =>{
    feld.forEach(div =>{
        div.style.backgroundColor='white';
    })
})

output.textContent="Gridsize is "+gridsize.value;
createGrid(gridsize.value);

gridsize.addEventListener('input', () =>{
    output.textContent="Gridsize is "+gridsize.value;
    createGrid(gridsize.value);
})