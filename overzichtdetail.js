
//bewegen van de warning in de automatische scan 
const shake = document.querySelectorAll(".update-site.new-errors");
shake.forEach(element => {
    element.classList.add('shake')
});


//bewegen van de warning in de pages
const wobble = document.querySelectorAll(".update-site.new-errors-2");
wobble.forEach(element => {
    element.classList.add('wobble')
});

// Zoek het input element
// Voeg een 'input' event toe
  // Als ik input krijg, loop dan door alle .pages elementen
     // Check of .value van het input element in de .textContent van het .pages element staat
     // Zo niet, gebruik .hidden = true, anders .hidden = false;
     // Hier heb je/ik .indexOf voor nodig, of .includes