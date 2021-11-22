
// Dichiarazione variabili
// Variabile Menu Hamburger
let menuHamb = document.querySelector (".hamburger-menu");

// Variabile Icona Menu
let barsIcon = document.querySelector (".fa-bars");

// Variabile Icona Chiusura
let closeIcon = document.querySelector (".close");

// Eventi al Clic
// Clic di apertura del menu
barsIcon.addEventListener ('click' , function(){
   menuHamb.classList.add ("active"); 
})
// Clic di chiusura del menu
closeIcon.addEventListener ('click' , function(){
    menuHamb.classList.remove ("active");
})

// Bonus
let newLi = document.createElement ("li");
let newVoice = document.createElement ("a"); 
let textVoice = document.createTextNode ("Contatti");
newVoice.appendChild (textVoice);
newLi.appendChild (newVoice);
document.querySelector (".hamburger-menu ul").appendChild (newLi); 