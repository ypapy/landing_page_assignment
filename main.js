const burger = document.querySelector('.burger');
const middleMenu = document.querySelector('.middle-menu');
const leftMenu = document.querySelector('.left-menu');
burger.addEventListener('click', ()=>{
    middleMenu.style.display = "block";
    leftMenu.style.display = "block";
})
console.log('hello')