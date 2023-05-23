// This glue file just enables the hamburger menu display 
// on mobile devices.  It will eventually be written in purescript

const hamburgerBtn   = document.getElementById('hamburger-btn')
const hamburgerMenu  = document.getElementById('hamburger-menu')
const hamburgerCross = document.getElementById('hamburger-cross')
const hamburgerLines = document.getElementById('hamburger-lines')

hamburgerBtn.addEventListener('click', () => {
    console.log("hamburger button clicked");
    // the menu toggles bewteen being hidden and being in flex display
    hamburgerMenu.classList.toggle('flex');
    hamburgerMenu.classList.toggle('hidden');
    // the hamburger icon toggles between lines and a cross
    hamburgerLines.classList.toggle('hidden');
    hamburgerCross.classList.toggle('hidden');  
    }
)