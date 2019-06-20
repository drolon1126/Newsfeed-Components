
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  let opened = document.querySelector('.menu--open')
  if(opened){
    TweenMax.to(menu,0.5,{x:-350, onComplete:()=>menu.classList.toggle('menu--open')})
  } else {
    menu.classList.toggle('menu--open');
    TweenMax.to(menu,0.5,{x:350})
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', ()=>toggleMenu());