//Менюшка
var wrapers = document.getElementsByClassName('main-nav__items-wraper');

//Кнопки
var openButton = document.getElementById('js-menu-open');
var closeButton = document.getElementById('js-menu-close');

for(var i = 0; i < wrapers.length; i++){
    wrapers[i].classList.remove('main-nav--no-js');
    }

openButton.addEventListener("click", function(event){
    for(var i = 0; i < wrapers.length; i++){
    wrapers[i].classList.toggle('main-nav--show');
    }
});

closeButton.addEventListener("click", function(event){
   for(var i = 0; i < wrapers.length; i++){
    wrapers[i].classList.remove('main-nav--show');
    }
});