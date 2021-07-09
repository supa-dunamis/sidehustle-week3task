let counterDisplay = document.querySelector('.counterDisplay');
let lowerCount = document.querySelector('.lower-count');
let addCount = document.querySelector('.add-count');
let number = 0;
counterDisplay.innerHTML=number;

addCount.addEventListener('click' , () => {
    if(number<50){
        number ++;
    }
    counterDisplay.innerHTML=number;
} );
lowerCount.addEventListener('click' , () => {
    if(number>0){
        number --;
    }
    counterDisplay.innerHTML=number;
} );
