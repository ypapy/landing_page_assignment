const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const close_icon = document.querySelector('.close_icon');
burger.addEventListener('click', ()=>{
    navLinks.style.display = "block";
    burger.style.display = "none";
    close_icon.style.display = "block";
})

close_icon.addEventListener('click', ()=>{
    navLinks.style.display = "none";
    burger.style.display = "block";
    close_icon.style.display = "none";
})