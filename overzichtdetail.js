
//bewegen van de warning in de automatische scan 

document.addEventListener('DOMContentLoaded', function () {
    const shake = document.querySelectorAll(".update-site.new-errors");
    shake.forEach(element => {
        element.classList.add('shake')
    });
});


//bewegen van de warning in de pages

document.addEventListener('DOMContentLoaded', function () {
    const wobble = document.querySelectorAll(".update-site.new-errors-2");
    wobble.forEach(element => {
        element.classList.add('wobble')
    });
});