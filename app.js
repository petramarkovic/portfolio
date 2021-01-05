//LOADER
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init(){
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 1000);
}

init();

//DROPDOWN MENU
let burger = document.getElementById('burger');
var menu = document.querySelector('.menu');

burger.addEventListener('click', dropMenu);

function dropMenu(e){
  e.preventDefault();
  
  if(menu.style.display === 'block'){
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}


//H1 ANIMATION
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

