let allButton = document.querySelectorAll('.tablinks');


for(i =0; i < allButton.length; i++){
    allButton[i].addEventListener('click',function(){
       let tabName = this.dataset.tab;
       let tabcontent =document.getElementById(tabName);
       let alltabcontent = document.querySelectorAll('.tabcontent');
       let alltabButton = document.querySelectorAll('.tablinks');
       for( j=0; j < alltabcontent.length; j++) {
        alltabcontent[j].style.display ='none';
       }

       for( k=0; k < alltabButton.length; k++) {
        alltabButton[k].classList.remove('active');
       }
 
       tabcontent.style.display = 'block';
       this.classList.add('active');
    });
}

document.querySelector('.tablinks').click();