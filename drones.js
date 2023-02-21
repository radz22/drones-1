const header = document.querySelector("header");


window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0 );

});



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = ()  => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}



const sr = ScrollReveal ({

    distance: '60px',
    duration: '2500px',
    reset: true


});

sr.reveal('.home-text',{delay:200, origin:'left'});









/*
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('open');
    searchForm.classList.remove('open');
    cartItem.classList.remove('open');
}
*/