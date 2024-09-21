let input=document.querySelector('input');

let lowerCaseOutput=document.querySelector('#Lowercase span' );
let upperCaseOutput=document.querySelector('#Uppercase span' );
let snakeCaseOutput=document.querySelector('#Snakecase span' );
let kababCaseOutput=document.querySelector('#kababcase span');
let trimCaseOutput=document.querySelector('#trim span');


const snakeFun=(arrow)=>{
return arrow.replaceAll(' ','_');
}
const kababFun=(arrow)=>{
    return arrow.replaceAll(' ','-');
}


input.addEventListener('input',()=>{
lowerCaseOutput.innerText=input.value.toLowerCase();
upperCaseOutput.innerText=input.value.toUpperCase();
snakeCaseOutput.innerText=snakeFun(input.value);
kababCaseOutput.innerText=kababFun(input.value);
trimCaseOutput.innerText=input.value.trim();

})