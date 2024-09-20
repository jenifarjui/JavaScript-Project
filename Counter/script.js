let subBtn = document.querySelector('.sub-btn');
let addBtn = document.querySelector('.add-btn');
let count = document.querySelector('.count');
let selector = document.querySelector('.selector');
let reset = document.querySelector('.reset');


subBtn.addEventListener('click', () => {
    let countValue = parseInt(count.innerText);
    let selectorValue = parseInt(selector.value);
    count.innerText = countValue - selectorValue;
})
addBtn.addEventListener('click', () => {
    let countValue = parseInt(count.innerText);
    let selectorValue = parseInt(selector.value);
    count.innerText = countValue + selectorValue;
})
reset.addEventListener('click', ()=>{
   let a=confirm('ok');
 if(a==true){
   count.innerText = 0; }
   else{

   }
  console.log(a)
})

