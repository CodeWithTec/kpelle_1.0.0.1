// this is for the Navbar 
const navLinkEls = document.querySelectorAll(".nav-link");

navLinkEls.forEach(navLinkEl =>{
    navLinkEl.addEventListener('click', () =>{
        document.querySelector('.active').classList.remove('active');
        navLinkEl.classList.add('active');
    })
})


// close and open button on the navbar 
const openBtn = () => {
    document.getElementById( "bars" ).style.display = 'none';
    document.getElementById("x-mark").style.display = 'block';
}

const closeBtn = () => {
    document.getElementById( "x-mark" ).style.display = 'none';
    document.getElementById("bars").style.display = 'block';
}

function playMusic(){
    var music = new Audio('/assert/audio/t-rex_roar.mp3');
    music.play();
    }