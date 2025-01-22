# Future Ready Design AccessDash

Future Ready Resign is een bedrijf dat digitale oplossingen ontwikkelt om technologie te versterken zonder deze te overheersen. Ze maken gebruikvriendelijke websites/apps die in het belang van de gebruiker zijn. Zo ook AceesDash. 
AccessDash is een website/app waar bedrijven/organisaties hun eigen website kunnen testen op toegankelijk. Dat gebeurt met een maandelijkse automatische scan en als er iets uitkomt dat de aandacht moet hebben wordt dat erin gezet. 

Future Ready Design is dit begonnen, omdat er een nieuwe wet komt voor bedrijven dat hun website voor iedereen toegankelijk is. Ze willen een website/app die makkelijker en duidelijker de toegankelijk te controleren en daar helpt AccessDash mee. 

## Inhoudsgave
  * [Beschrijving](#bedrijving)
  * [Kenmerken](#kenmerken)
  * [Code Conventions](#CodeConventions)
  * [Licentie](#licentie)

## Beschrijving
Ik heb de overzichtspagina en de overzichtdetail pagina gemaakt.

[overzichtspagina](https://nadiachaja.github.io/the-startup-responsive-interactive-website/) <br>
[overzichtdetail pagina](https://nadiachaja.github.io/the-startup-responsive-interactive-website/overzichtdetail.html)

Als je op de overzichtspagina komt kan je naar de website toe die je wilt testen op toegankelijk. Je ziet hoeveel procent het toegankelijk is ook kan je zien als er nieuwe fouten zijn ondekt, het ontoegankelijk of toegankelijk is. Je kan op het kaartje klikken om naar de andere pagina te gaan om meer detail te krijgen. 

Als je op de overzichtdetail pagina komt zie je de automatische scan en hoeveel procent het toegankelijk is en waar je op moet letten. Als je meer naar benden scrollt zie je per pagina van je website hoeveel procent het is en op welk niveau van de WCAG met een meter. De niveaus staan bovenaan van en kan je zien hoeveel er zijn. 

<img width="490" alt="overzichtspagina" src="https://github.com/user-attachments/assets/69c72a19-1b5e-45c5-9b9f-8e1845dfcfbc" /> 
<img width="490" alt="overzichtdetail pagina" src="https://github.com/user-attachments/assets/2b2a71e2-8b48-43dd-b689-53c5273a94cd" />

<br> 
<br>
<br>

**Responsive** <br>
Ik heb volgens mobile first gewerkt en ben toen steeds naar grotere schermen gegaan.
De breakpoints waar het meest verandert is >700px en de >900px. Daar verandert de lay-out zoals de nav die bij telefoon boven staat en bij grotere schermen naast elkaar. Ook hoeveel kaartjes naast elkaar staan en de filters die bij telefoon onder elkaar staan en bij grotere schermen naast elkaar.  

<video src="https://github.com/user-attachments/assets/d99c2e2b-9d38-4934-bbbe-24ce6f89131e" controls muted autoplay playsinline></video>

<video src="https://github.com/user-attachments/assets/bb66604b-6a13-4704-9de2-ca15673c271c" controls muted autoplay playsinline></video>

<br> 
<br>
<br>

**Ontwerpkeuzes** <br>

De opdrachtgever heeft een desktop versie gegeven en heeft gevraagd om het responsive te maken. Ik heb toen in [Figma ](https://www.figma.com/design/EwiROVeQwquFYyvryLPXkQ/Untitled?node-id=0-1&p=f&t=2r0ode26LzX48Lzp-0)een design gemaakt voor tablet en telefoon. Nadat ik het design voor tablet en telfoon gemaakt had kwam daar uit dat de navigatie voor telefoon niet naast de kaartjes kon. Ik heb er toen voor gekozen om de navigatie boven neer te zetten en als je scrollt dat die bovenaan blijft staan. 

<br>
<br>

Ik heb de p zo gestylt dat het op een button lijkt. Die gaan bewegen na 1.5 seconden als de pagina geladen is en stopt na 10 keer en bij de ontoegankelijk na 15 keer. Ik heb hiervoor gekozen, zodat gebruikers sneller opmerken als er fouten zijn of dat hun website ontoegankelijk is.

<video src="https://github.com/user-attachments/assets/3c8bdde7-25ed-4afc-bef1-e1d7e750f997" controls muted autoplay playsinline></video>

<br>

**Interactie** <br>
voor de interactie heb feedforward en feedback toegepast. De feedforward heb ik toegepast door tekst bij de zoekbalk neer te zetten, het vergrootglas en de placeholder in de zoekbalk. De feedback is als de gebruiker een woord intypt en het resultaat krijgt. 

<video src="https://github.com/user-attachments/assets/cc1fe8b4-ec47-4d70-bcc9-a609e5f1f2b9" controls muted autoplay playsinline></video>

<br>
<br>
Verder heb ik op de buttons een hover dat de backgroud en color veranderd. Ook heb ik in linkje in de nav een hover gegeven dat er een lijn onder de tekst komt. Daarbij hebben alle kaartje al een drop-shadow en met de hover heb ik het duidelijker gemaakt. 


## Kenmerken

**HTML**
De HTML bevat een skiplink die je naar de main verwijst, Zo sla je de navigatie over en is dat ook handig voor screenreaders als de gebruikers de navigatie willen overslaan.
Ook hebben alle img een alt die ingevuld zijn als dat nodig is en daarbij hebben sommige elemeten aria-hidden=true. 
<br>

**CSS**
Ik heb een stylesheet gemaakt waar de kleuren, lettertype, font-size, border-radius en border. Daarnaast heeft elke pagina ook zijn eigen CSS bstand <br>
[Stylesheet](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/styleguide.css) <br>
[overzichtpagina](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/style.css) <br> 
[overzichtdetail pagina ](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/overzichtdetail.css)
<br>

**JS**
Ik heb JavaScript gebruikt voor het laten bewegen van de p in de kaartjes.
https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/be06815a2b43a0e048d239d9468f205b5dc68f3f/script.js#L22-L38
<br>

Ook dat je op het hele kaartje kan klikken, zodat je naar de ander pagina gaat.
https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/be06815a2b43a0e048d239d9468f205b5dc68f3f/script.js#L2-L18
<br>

Verder de dat de zoekbalk werkt.
https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/be06815a2b43a0e048d239d9468f205b5dc68f3f/overzichtdetail.js#L11-L24

## Code Conventions

**Ademruimte en inspringen**
- Spring altijd met een tab, zie [voorbeeld](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/overzichtdetail.html#L142-L151)
- Inline elemeten op dezelfde regel, zie [voorbeeld](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/overzichtdetail.html#L25-L35)
- Block elemeten op aparte regel, zie [voorbeeld](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/overzichtdetail.html#L121-L128)
<br>

**Volgorde en nesten van CSS selectors**
- CSS vooral op volgorde van HTML. De body eerst met de dingen die overal moet staan en daarna de nav en main. Zie [voorbeeld](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/style.css#L1)
- De hover, after, before, focus, open, not, detiails-content en strong zijn genest in de betreffende selector. Zie [voorbeeld ](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/style.css#L203-L216)
<br>

**Nesten van media queries**
- Alle media queries zijn genest in de betreffende selectors, [zie voorbeeld](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/overzichtdetail.css#L219-L235)
- De media queries staan onderaan de betreffende selectors. Als er een CSS genesten selector bij zit wordt de media querie zo gezet dat die alleen voor die selector is, daarom kan het zijn dat niet alle media queries helemaal onderaan de selectors zitten. [Zie voorbeeld](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/overzichtdetail.css#L324-L343)
<br>

**Naamgeving**
- Kebab-casing in HTML en CSS, zie [voorbeeld](https://github.com/nadiachaja/the-startup-responsive-interactive-website/blob/main/styleguide.css#L5-L20)
- De naamgeving van classes zo duidelijk mogelijk te beschrijven over de inhoud van de selector 


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


