//alle articles opzoeken 
//alle articles event toevoegen 
//functie oproepen 
//in de functie de a opzoeken 
//de href uit de a opzoeken 
//naar de url gaan 


const cards = document.querySelectorAll("article")

cards.forEach(card => {
    card.addEventListener("click", toDetailInfo);
});

function toDetailInfo(event){
    
   const card = event.currentTarget;

   const link = card.querySelector("a");
   const linkName = link.href;
   
   window.location.href = linkName;
  
}