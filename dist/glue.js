// This glue file just enables the hamburger menu display 
// on mobile devices.  It will eventually be written in purescript

const hamburgerBtn  = document.getElementById('hamburger-btn')
const hamburgerMenu = document.getElementById('hamburger-menu')

hamburgerBtn.addEventListener('click', () => {
    console.log("hamburger button clicked");
    hamburgerBtn.classList.toggle('open');
    hamburgerMenu.classList.toggle('flex');
    hamburgerMenu.classList.toggle('hidden');
    }
)