

//bewegen van de warning in de pages
const wobble = document.querySelectorAll(".update-site.new-errors-2");
wobble.forEach(element => {
    element.classList.add('wobble')
});



// zoekbalk 

    document.querySelector('input').addEventListener('input', function() {  // Zoek het input element  // Voeg een 'input' event toe
        const inputValue = event.target.value;
        const pages = document.querySelectorAll('.pages');
     
        pages.forEach(function(page) {   // Als ik input krijg, loop dan door alle .pages elementen
            if (page.textContent.includes(inputValue)) {      // Check of .value van het input element in de .textContent van het .pages element staat  // Hier heb je/ik .indexOf voor nodig, of .includes
                page.hidden = false;  //zo niet, .hidden = false
            } else {
                page.hidden = true; // anders, gebruik .hidden = true
            }
        });
    });