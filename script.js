const input = document.querySelector("#number").defaultValue=50;
const range1 = document.querySelector("#f-range").defaultValue=0;
window.maxSum = document.querySelector("#number").value;

function change(e){
    maxSum=document.querySelector("#number").value;
}

document.querySelector("#range-a-value").textContent=range1;
document.querySelector("#f-range").addEventListener('input',(e)=>{
    window.valuer1=parseInt(e.target.value);
   document.querySelector("#range-a-value").textContent=valuer1;
   if(valuer1<maxSum){
       document.querySelector("#s-range").max = maxSum-valuer1;
   }
   const sum = document.querySelector("#sum").textContent=valuer1+valuer2;
})


const range2 = document.querySelector("#s-range").defaultValue=50;
document.querySelector("#range-b-value").textContent=range2;
document.querySelector("#s-range").addEventListener('input',(e)=>{
    window.valuer2=parseInt(e.target.value);
   document.querySelector("#range-b-value").textContent=valuer2;
   if(valuer2<maxSum){
       document.querySelector("#f-range").max=maxSum-valuer2;
   } 
   const sum = document.querySelector("#sum").textContent=valuer2+valuer1;
})
const sum = document.querySelector("#sum").textContent=range2+range1;
