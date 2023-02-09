let nums= document.querySelectorAll(".num-our")
let boxx= document.querySelectorAll(".father-our")
let start=false

window.onscroll=function(){
let r = window.scrollY
console.log(r)
let s= boxx.offsetTop;
console.log(s)
if(window.scrollY >= boxx.offsetTop){
// nums.forEach((nums)=> startcount(nums));
}   
}

function startcount(el){
let goal=el.dataset.goal;
let count=setInterval(()=>{
el.textContent++;
if(el.textContent==goal){
clearInterval(count);
}
},0.000001);



}

nums.forEach((nums)=> startcount(nums));














