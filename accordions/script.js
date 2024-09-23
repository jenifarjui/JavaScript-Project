let accordionItem=document.querySelectorAll('.accordion-item');




accordionItem.forEach( items => {
    let title = items.querySelector('.accordion-title');
    let contant = items.querySelector('.accordion-contant');

    title.addEventListener('click',() => {
        for(i=0; i<accordionItem.length; i++){
            if(accordionItem[i] != items){
                accordionItem[i].classList.remove('active') ; 
            }else{
                 items.classList.toggle('active');
            }
        }
       
    })
});