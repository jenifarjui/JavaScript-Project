function showConfirm(message){
    let confirmBox =document.createElement('div');
    confirmBox.classList.add('confirm-box');
    let messageBox =document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent=message;
    confirmBox.appendChild(messageBox);


    let buttonBox =document.createElement('div');
    buttonBox.classList.add('button-box');
    messageBox.appendChild(buttonBox);

    let yesButton =document.createElement('div');
    yesButton.classList.add('yes-button');
    yesButton.textContent='Yes';
    buttonBox.appendChild(yesButton);


    let noButton =document.createElement('div');
    noButton.classList.add('no-button');
    noButton.textContent='No';
    buttonBox.appendChild(noButton);

    const yesFun=()=>{
        console.log('yes');
        confirmBox.style.display='none';
    }
    yesButton.addEventListener('click',yesFun);

    const noFun=()=>{
        console.log('no');
        confirmBox.style.display='none';
    }
    noButton.addEventListener('click',noFun);




    document.body.appendChild(confirmBox);

}
showConfirm('Are You 20 years old?');

let add=document.querySelector('.addbtn');
let confirmBox =document.querySelector('.confirm-box');
add.addEventListener('click',()=>{
    confirmBox.style.display='flex';
    showConfirm('Are You ?');
});