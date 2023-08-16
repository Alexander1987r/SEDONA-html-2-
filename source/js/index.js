/*Функция лайков  1-фотографии*/
const likesButton=document.querySelector('.catalog-photo__button');
let likesNumber=document.querySelector('.catalog-photo__likes');


likesButton.onclick=function(){
  if(likesButton.classList.contains('added')){
   likesNumber.textContent--;
  }else {
    likesNumber.textContent++;
  }
  likesButton.classList.toggle('added');
}

