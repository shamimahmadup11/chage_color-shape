const ChangeColor=document.querySelector(".container");
const ChangeColorBtn=document.querySelector("#changeColor");
const changeShape0fInner=document.querySelector(".changeShape")
const changeShapeBtn=document.querySelector("#changeShap")
const square=document.querySelector(".square");
const traingle=document.querySelector(".traingle");

ChangeColorBtn.addEventListener("click" ,function(){
    let r=Math.floor(Math.random()*255)
   let g=Math.floor(Math.random()*255)
   let  b=Math.floor(Math.random()*255)
    ChangeColor.style.background=`rgb(${r},${g},${b})`;
})
changeShapeBtn.addEventListener("click",function(){
    if (square.classList.contains("active")) {
        square.classList.remove("active");
        traingle.classList.add("active");
      } else {
        traingle.classList.remove("active");
        square.classList.add("active");
      }
    
    
   
})

