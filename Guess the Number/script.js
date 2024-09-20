let formGuess = document.querySelector('.guess');
let inputSelector =document.querySelector('.selector');
let result = document.querySelector('.result');
let guessNumber = document.querySelector('.guessNumber');
let submit =document.querySelector('.submit');
let start =document.querySelector('.start');



let guessNumberArray=[];
let randomNumber=Math.round(Math.random()*100);

 start.disabled = true;
formGuess.addEventListener('submit',(e)=>{
    start.disabled = false;
    e.preventDefault();
    let inputValue=parseInt(inputSelector.value);
    if(inputValue < randomNumber){
        result.innerText = 'low ';
    }
    else if(inputValue > randomNumber){      
        result.innerText = 'too high';
    }
    else{
        result.innerText= 'congratulation';      
    }

    guessNumberArray.push(inputValue);
    guessNumber.innerText = 'your guesses number : '+ guessNumberArray.join(' ,');
   formGuess.reset ();
})
start.addEventListener('click',() =>{
    guessNumber.innerText='';
    result.innerText='';   
    submit.disabled = false;
    randomNumber=Math.round(Math.random()*100);

})