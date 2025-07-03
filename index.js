const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const bodyEl=document.querySelector("body")
let code="";
contanerCreater();
updateColor();


function updateColor(){
    const contanerEl=document.querySelectorAll(".contaner")

    contanerEl.forEach(contaner=>{
        let code="";
    for(let i=0;i<6;i++){
        code+=hex[Math.floor(Math.random()*hex.length)]
    }
    contaner.style.background=`#${code}`;
    contaner.textContent = `#${code}`;
    contaner.style.color = "#fff"; 

    });
    
}


function contanerCreater(){
    const contanerEl=document.querySelectorAll(".contaner")

    for(let i=0;i<20;i++){
        const contaner = document.createElement("div");
        contaner.className="contaner"
        bodyEl.appendChild(contaner);
    
     }
}
