
//de a over het article (dat je overal op de article kan klikken om naar een andere pagina te gaan)

const cards = document.querySelectorAll("article") //alle articles opzoeken 

cards.forEach(card => {
    card.addEventListener("click", toDetailInfo); //alle articles event toevoegen 
});

function toDetailInfo(event){  //functie oproepen 
    
   const card = event.currentTarget;

   const link = card.querySelector("a"); //in de functie de a opzoeken 
   const linkName = link.href; //de href uit de a opzoeken 
   
   window.location.href = linkName; //naar de url gaan 
}



//bewegen van de warning in de cards

document.addEventListener('DOMContentLoaded', function () {
    const shake = document.querySelectorAll(".update-site.new-errors");
    shake.forEach(element => {
        element.classList.add('shake')
    });
});


