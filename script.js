const hamburger=document.querySelector('.hamburger')
const navlinks=document.querySelector('.nav-links')

console.log('hamburger');

navlinks.classList.toggle('hide')

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('hide')
})